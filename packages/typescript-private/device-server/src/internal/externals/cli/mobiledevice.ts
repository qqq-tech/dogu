import { Printable, Retry, stringify } from '@dogu-tech/common';
import { ChildProcess } from '@dogu-tech/node';
import child_process from 'child_process';
import fs from 'fs';
import { idcLogger } from '../../../logger/logger.instance';
import { pathMap } from '../../../path-map';
import { TunnelContext } from './mobiledevice-tunnel';
import util from 'util';

const execFileAsync = util.promisify(child_process.execFile);
const DefaultTimeout = 5 * 1000;

class MobileDeviceImpl {
  async listDevices(printable?: Printable): Promise<string[]> {
    const { stdout, stderr } = await execFileAsync(pathMap().macos.mobiledevice, ['list_devices'], {
      timeout: DefaultTimeout,
      encoding: 'utf8',
    });
    if (stderr.length !== 0) {
      throw Error(`mobiledevice list_devices error: ${stderr}`);
    }
    return stdout
      .trim()
      .split('\n')
      .filter((line) => line.length !== 0);
  }

  @Retry()
  async getDeviceProp(udid: string, property: string, printable?: Printable): Promise<string> {
    const { stdout, stderr } = await execFileAsync(pathMap().macos.mobiledevice, ['get_device_prop', '-u', udid, property], {
      timeout: DefaultTimeout,
      encoding: 'utf8',
    });
    if (stderr) {
      throw Error(`mobiledevice get_device_name error: ${stderr}`);
    }
    return stdout.trim();
  }

  /**
   * @note already retry in getDeviceProp. so no need to retry here
   */
  getProductType(udid: string, printable?: Printable): Promise<string> {
    return this.getDeviceProp(udid, 'ProductType', printable);
  }

  /**
   * @note already retry in getDeviceProp. so no need to retry here
   */
  getProductVersion(udid: string, printable?: Printable): Promise<string> {
    return this.getDeviceProp(udid, 'ProductVersion', printable);
  }

  tunnel(udid: string, hostPort: number, devicePort: number, printable: Printable = idcLogger): TunnelContext {
    const newPrintable = {
      error: function (message: unknown, details?: Record<string, unknown> | undefined): void {
        printable.error(newPrintable.prefixMessage(message), details);
      },
      info: function (message: unknown, details?: Record<string, unknown> | undefined): void {
        printable.info(newPrintable.prefixMessage(message), details);
      },
      prefixMessage: function (message: unknown): string {
        return `[Tunnel ${hostPort} -> ${devicePort}] ${stringify(message)}`;
      },
    };

    const proc = ChildProcess.spawnSync(pathMap().macos.mobiledevice, ['tunnel', '-u', udid, hostPort.toString(), devicePort.toString()], {}, newPrintable);
    printable.info(`tunneling ${udid} ${hostPort} -> ${devicePort}`);
    const ret = new TunnelContext(proc, hostPort, devicePort);
    return ret;
  }

  @Retry()
  async getBundleId(dotAppPath: string): Promise<string> {
    if (!dotAppPath.endsWith('.app')) {
      throw Error(`appPath must be end with .app: ${dotAppPath}`);
    }
    const { stdout } = await ChildProcess.execIgnoreError(`${pathMap().macos.mobiledevice} get_bundle_id ${dotAppPath}`, {}, idcLogger);
    return stdout.trim();
  }

  uninstallApp(udid: string, appName: string, printable: Printable = idcLogger): Promise<child_process.ChildProcess> {
    return ChildProcess.spawnAndWait(pathMap().macos.mobiledevice, ['uninstall_app', '-u', udid, appName], {}, printable);
  }

  installApp(udid: string, appPath: string, printable: Printable = idcLogger): Promise<child_process.ChildProcess> {
    return ChildProcess.spawnAndWait(pathMap().macos.mobiledevice, ['install_app', '-u', udid, appPath], {}, printable);
  }

  @Retry()
  async listApps(udid: string): Promise<string[]> {
    const { stdout } = await ChildProcess.exec(`${pathMap().macos.mobiledevice} list_apps -u ${udid}`, {}, idcLogger);
    return stdout
      .trim()
      .split('\n')
      .filter((line) => line.length !== 0);
  }
}

// export async function tunnelCheckForward(udid: string, hostPort: number, devicePort: number, printable: Printable = idcLogger): Promise<child_process.ChildProcess> {
//   for await (const _ of loop(3000, 30)) {
//     const proc = await ChildProcess.spawn(mobiledevice, ['tunnel', '-u', udid, hostPort.toString(), devicePort.toString()], {}, idcLogger);
//     const done = { isDone: false };
//     const waitPromise = new Promise<boolean>((resolve, reject) => {
//       let stdoutSum = '';
//       let stderrSum = '';
//       proc.stdout?.on('data', (data) => {
//         const str = String(data);
//         stdoutSum += str;
//         if (stdoutSum.includes('Forwarding connection to device')) {
//           resolve(true);
//         }
//       });

//       proc.stderr?.on('data', (data) => {
//         const str = String(data);
//         stderrSum += str;
//         if (stderrSum.includes('Device refused connection')) {
//           proc.kill();
//           resolve(false);
//         }
//       });
//     });

//     const portCheckPromise = async (): Promise<void> => {
//       for await (const _ of loop(1000, 10)) {
//         try {
//           if (done.isDone) {
//             return;
//           }
//           await ChildProcess.exec(`nc -z localhost ${hostPort}`, {}, idcLogger);
//         } catch {
//           continue;
//         }
//       }
//     };

//     const portForwarded = await Promise.any([waitPromise, portCheckPromise()]);
//     done.isDone = true;
//     if (true === portForwarded) {
//       return proc;
//     }
//   }
//   throw Error(`tunnelCheckForward failed: ${udid} ${hostPort} -> ${devicePort}`);
// }

function createMobileDevice(): MobileDeviceImpl {
  let instance: MobileDeviceImpl | null = null;
  return new Proxy(
    {},
    {
      // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
      get(target, prop, receiver) {
        if (!instance) {
          instance = new MobileDeviceImpl();
          if (process.platform === 'darwin') {
            fs.chmodSync(pathMap().macos.mobiledevice, 0o777);
          }
        }
        // eslint-disable-next-line @typescript-eslint/no-unsafe-return
        return Reflect.get(instance, prop, receiver);
      },
    },
  ) as MobileDeviceImpl;
}

export const MobileDevice = createMobileDevice();