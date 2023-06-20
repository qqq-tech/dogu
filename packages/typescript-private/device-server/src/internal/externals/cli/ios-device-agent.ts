import { Platform, Serial } from '@dogu-private/types';
import { delay, errorify, Printable, stringifyError } from '@dogu-tech/common';
import { HostPaths } from '@dogu-tech/node';
import compressing from 'compressing';
import fs from 'fs';
import { glob } from 'glob';
import { Socket } from 'net';
import path from 'path';
import plist from 'plist';
import { idcLogger } from '../../../logger/logger.instance';
import { pathMap } from '../../../path-map';
import { config } from '../../config';
import { Zombieable, ZombieProps, ZombieWaiter } from '../../services/zombie/zombie-component';
import { ZombieServiceInstance } from '../../services/zombie/zombie-service';
import { IosDeviceAgent, MobileDevice, XcodeBuild } from '../index';
import { ZombieTunnel } from './mobiledevice-tunnel';
import { XCTestRunContext } from './xcodebuild';

export class IosDeviceAgentProcess {
  private readonly xctest: ZombieXCTest;
  private readonly screenTunnel: ZombieTunnel;
  private readonly grpcTunnel: ZombieTunnel;
  private readonly screenChecker: ZombieScreenChecker;
  constructor(
    private readonly serial: Serial,
    private readonly screenForwardPort: number,
    private readonly screenDevicePort: number,
    private readonly grpcForwardPort: number,
    private readonly grpcDevicePort: number,
    private readonly webDriverPort: number,
    private readonly logger: Printable,
    private isKilled = false,
  ) {
    ZombieServiceInstance.deleteComponentIfExist((zombieable: Zombieable): boolean => {
      if (zombieable instanceof ZombieXCTest) {
        return zombieable.serial === this.serial;
      }
      return false;
    }, 'kill previous xctest');
    ZombieServiceInstance.deleteComponentIfExist((zombieable: Zombieable): boolean => {
      if (zombieable instanceof ZombieTunnel) {
        return zombieable.serial === this.serial && zombieable.hostPort === this.screenForwardPort;
      }
      return false;
    }, 'kill previous tunnel');

    ZombieServiceInstance.deleteComponentIfExist((zombieable: Zombieable): boolean => {
      if (zombieable instanceof ZombieTunnel) {
        return zombieable.serial === this.serial && zombieable.hostPort === this.grpcForwardPort;
      }
      return false;
    }, 'kill previous tunnel');
    ZombieServiceInstance.deleteComponentIfExist((zombieable: Zombieable): boolean => {
      if (zombieable instanceof ZombieScreenChecker) {
        return zombieable.serial === this.serial;
      }
      return false;
    }, 'kill previous screenchecker');
    this.xctest = new ZombieXCTest(this.serial, this, this.webDriverPort, this.grpcDevicePort, this.logger);
    this.screenTunnel = new ZombieTunnel(this.serial, this.screenForwardPort, this.screenDevicePort, this.logger);
    this.grpcTunnel = new ZombieTunnel(this.serial, this.grpcForwardPort, this.grpcDevicePort, this.logger);
    this.screenChecker = new ZombieScreenChecker(this.serial, this, this.screenForwardPort, this.xctest, this.logger);
  }

  static async start(
    serial: Serial,
    screenForwardPort: number,
    screenDevicePort: number,
    grpcForwardPort: number,
    grpcDevicePort: number,
    webDriverDevicePort: number,
    logger: Printable,
  ): Promise<IosDeviceAgentProcess> {
    let webDriverPort = webDriverDevicePort;
    let grpcPort = grpcDevicePort;
    if (config.externalIosDeviceAgent.use) {
      const devices = config.externalIosDeviceAgent.devices.filter((device) => device.serial === serial);
      if (devices.length !== 1) {
        throw new Error(`serial is not found. ${serial}. check config`);
      }
      const device = devices[0];
      if (device === undefined) {
        throw new Error(`device is undefined. ${serial}. check config`);
      }
      webDriverPort = device.webDriverPort;
      grpcPort = device.grpcPort;
    }
    const ret = new IosDeviceAgentProcess(serial, screenForwardPort, screenDevicePort, grpcForwardPort, grpcPort, webDriverPort, logger);
    await ret.xctest.zombieWaiter.waitUntilAlive();
    await ret.screenTunnel.zombieWaiter.waitUntilAlive();
    await ret.grpcTunnel.zombieWaiter.waitUntilAlive();
    await ret.screenChecker.zombieWaiter.waitUntilAlive();

    return ret;
  }

  delete(): void {
    this.isKilled = true;
    ZombieServiceInstance.deleteComponent(this.xctest);
    ZombieServiceInstance.deleteComponent(this.grpcTunnel);
  }

  get hasKilled(): boolean {
    return this.isKilled;
  }
}

class ZombieXCTest implements Zombieable {
  private xctestrun: XCTestRunContext | null = null;
  public readonly zombieWaiter: ZombieWaiter;
  constructor(
    public readonly serial: Serial,
    private readonly iosDeviceAgentProcess: IosDeviceAgentProcess,
    private readonly webDriverPort: number,
    private readonly grpcPort: number,
    // private readonly iosDeviceControllerGrpcClient: IosDeviceControllerGrpcClient,
    private readonly logger: Printable,
  ) {
    this.zombieWaiter = ZombieServiceInstance.addComponent(this);
  }
  get parent(): null {
    return null;
  }
  get name(): string {
    return `XCTest`;
  }
  get platform(): Platform {
    return Platform.PLATFORM_IOS;
  }
  get props(): ZombieProps {
    return { webDriverPort: this.webDriverPort, grpcPort: this.grpcPort };
  }
  get printable(): Printable {
    return this.logger;
  }
  async revive(): Promise<void> {
    this.logger.debug?.(`ZombieScreenChecker.revive`);
    if (config.externalIosDeviceAgent.use) {
      return;
    }
    const xctestrunPath = await IosDeviceAgent.copyXctestrun(this.serial);
    await MobileDevice.uninstallApp(this.serial, 'com.dogu.IOSDeviceAgentRunner').catch(() => {
      // ignore
      this.logger.warn?.('uninstallApp com.dogu.IOSDeviceAgentRunner failed');
    });
    await MobileDevice.uninstallApp(this.serial, 'com.dogu.IOSDeviceAgentRunner.xctrunner').catch(() => {
      // ignore
      this.logger.warn?.('uninstallApp com.dogu.IOSDeviceAgentRunner.xctrunner failed');
    });
    await updateXctestrunFile(xctestrunPath, this.webDriverPort, this.grpcPort);
    this.xctestrun = XcodeBuild.testWithoutBuilding(xctestrunPath, this.serial, this.printable);
    this.xctestrun.proc.on('close', () => {
      this.xctestrun = null;
      ZombieServiceInstance.notifyDie(this);
    });
  }

  async update(): Promise<void> {
    if (config.externalIosDeviceAgent.use) {
      return;
    }
    if (!this.xctestrun?.isAlive) {
      ZombieServiceInstance.notifyDie(this);
      return;
    }
    await delay(0);
  }

  onDie(): void {
    this.logger.debug?.(`ZombieXCTest.onDie`);
    this.xctestrun?.kill();
  }
}

export async function clearRunspace(): Promise<void> {
  const idaRunspacesPath = HostPaths.idaRunspacesPath(HostPaths.doguHomePath);
  if (fs.existsSync(idaRunspacesPath)) {
    await fs.promises.rm(idaRunspacesPath, { recursive: true });
  }
  await fs.promises.mkdir(idaRunspacesPath, { recursive: true });
}

async function copyToDeviceRunPath(serial: Serial): Promise<string> {
  const idaRunspacesPath = HostPaths.idaRunspacesPath(HostPaths.doguHomePath);
  const deviceRunPath = path.resolve(idaRunspacesPath, serial);
  if (fs.existsSync(deviceRunPath)) {
    await fs.promises.rm(deviceRunPath, { recursive: true });
  }
  await fs.promises.mkdir(deviceRunPath, { recursive: true });
  await compressing.zip.uncompress(pathMap().macos.iosDeviceAgentRunnerZip, deviceRunPath);
  return deviceRunPath;
}

async function updateXctestrunFile(xctestrunPath: string, webDriverPort: number, grpcPort: number): Promise<void> {
  const content = await fs.promises.readFile(xctestrunPath, 'utf8');
  const value = plist.parse(content);
  if (typeof value === 'object') {
    const object = value as Record<string, unknown>;
    if ('DoguRunner' in object) {
      const runner = Reflect.get(object, 'DoguRunner') as Record<string, unknown>;
      if ('EnvironmentVariables' in runner) {
        const environment = Reflect.get(runner, 'EnvironmentVariables') as Record<string, string>;
        environment.DOGU_IOS_DEVICE_AGENT_WEB_DRIVER_PORT = `${webDriverPort}`;
        environment.DOGU_IOS_DEVICE_AGENT_GRPC_PORT = `${grpcPort}`;
        await fs.promises.writeFile(xctestrunPath, plist.build(value));
        return;
      }
    }
  }
  throw new Error(`xctestrun file is invalid. ${xctestrunPath}`);
}

export async function copyXctestrun(serial: Serial): Promise<string> {
  const deviceRunPath = await copyToDeviceRunPath(serial);
  const files = await glob(`${deviceRunPath}/**/*.xctestrun`);
  if (files.length === 0) {
    throw new Error('xctestrun file not found');
  }
  const xctestrunPath = files[0];
  idcLogger.info(`xctestrun file path: ${xctestrunPath}`);
  return xctestrunPath;
}

class ZombieScreenChecker implements Zombieable {
  public readonly zombieWaiter: ZombieWaiter;
  constructor(
    public readonly serial: Serial,
    private readonly iosDeviceAgentProcess: IosDeviceAgentProcess,
    private readonly screenForwadPort: number,
    private readonly xctest: ZombieXCTest,
    private readonly logger: Printable,
  ) {
    this.zombieWaiter = ZombieServiceInstance.addComponent(this);
  }
  get parent(): null {
    return null;
  }
  get name(): string {
    return `ScreenChecker`;
  }
  get platform(): Platform {
    return Platform.PLATFORM_IOS;
  }
  get props(): ZombieProps {
    return {};
  }
  get printable(): Printable {
    return this.logger;
  }
  async revive(): Promise<void> {
    if (config.externalIosDeviceAgent.use) {
      return;
    }
    const tryCount = 60;
    let isConnected = false;
    for (let i = 0; i < tryCount; i++) {
      await delay(3000);
      const socketOrError = await this.connectSocket().catch((e: Error) => {
        return e;
      });
      if (socketOrError instanceof Error) {
        this.logger.debug?.(`ZombieScreenChecker. connect failed. count: ${i}, error:${stringifyError(socketOrError)}`);
        continue;
      }
      this.logger.debug?.(`ZombieScreenChecker.connect done`);

      const sendErr = await this.sendHello(socketOrError).catch((e: Error) => {
        return e;
      });
      if (sendErr instanceof Error) {
        this.logger.debug?.(`ZombieScreenChecker. hello failed. count: ${i}, error:${stringifyError(sendErr)}`);
        continue;
      }
      this.logger.debug?.(`ZombieScreenChecker. hello success. `);
      const onClose = (): void => {
        this.logger.info(`ZombieScreenChecker. close. `);
        ZombieServiceInstance.notifyDie(this.xctest, 'screen check failed');
        ZombieServiceInstance.notifyDie(this, 'close');
      };
      socketOrError.on('close', onClose);
      isConnected = true;
      break;
    }
    if (!isConnected) {
      throw new Error('ZombieScreenChecker notconnected');
    }
  }

  async update(): Promise<void> {
    // noop
  }

  onDie(): void {
    // noop
  }

  private async connectSocket(): Promise<Socket> {
    const socket = new Socket();
    return new Promise((resolve, reject) => {
      socket.once('connect', () => {
        resolve(socket);
      });

      socket.once('error', (error: Error) => {
        reject(error);
      });

      socket.once('timeout', () => {
        reject(new Error('timeout'));
      });

      socket.once('end', () => {
        reject(new Error('end'));
      });
      socket.connect({ host: '127.0.0.1', port: this.screenForwadPort });
    });
  }

  private async sendHello(socket: Socket): Promise<void> {
    return new Promise((resolve, reject) => {
      const message = '{"type":"livecheck"}';
      const sizeBuffer = Buffer.alloc(4);
      sizeBuffer.writeUInt32LE(message.length, 0);

      socket.write(Buffer.concat([sizeBuffer, Buffer.from(message)]), (err: Error | undefined) => {
        // noop
      });
      socket.once('error', (error: Error) => {
        reject(error);
      });
      delay(1000)
        .then(() => {
          resolve();
        })
        .catch((e: Error) => {
          this.logger.error(`ZombieScreenChecker.sendHello. delay error:${stringifyError(e)}`);
          resolve();
        });
    });
  }
}