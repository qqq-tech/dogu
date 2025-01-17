import {
  DefaultScreenCaptureOption,
  DeviceSystemInfo,
  ErrorResult,
  FilledRuntimeInfo,
  Platform,
  PrivateProtocol,
  ProfileMethod,
  ProtoRTCPeerDescription,
  RuntimeInfo,
  ScreenCaptureOption,
  ScreenRecordOption,
  Serial,
  StreamingAnswer,
} from '@dogu-private/types';
import { Closable, delay, errorify, FilledPrintable, Printable, stringify } from '@dogu-tech/common';
import { StreamingOfferDto } from '@dogu-tech/device-client-common';
import { HostPaths, killChildProcess } from '@dogu-tech/node';
import { Manifest, open } from 'adbkit-apkreader';
import { ChildProcess, execFile } from 'child_process';
import fs from 'fs';
import lodash from 'lodash';
import { Observable } from 'rxjs';
import semver from 'semver';
import { AppiumContext, AppiumContextKey, AppiumContextProxy } from '../../appium/appium.context';
import { AppiumService } from '../../appium/appium.service';
import { AppiumDeviceWebDriverHandler } from '../../device-webdriver/appium.device-webdriver.handler';
import { DeviceWebDriverHandler } from '../../device-webdriver/device-webdriver.common';
import { AppiumEndpointHandlerService } from '../../device-webdriver/endpoint-handler/appium.service';
import { env } from '../../env';
import { GamiumContext } from '../../gamium/gamium.context';
import { GamiumService } from '../../gamium/gamium.service';
import { HttpRequestRelayService } from '../../http-request-relay/http-request-relay.common';
import { DoguLogger } from '../../logger/logger';
import { createAdaLogger } from '../../logger/logger.instance';
import { pathMap } from '../../path-map';
import { Adb } from '../externals';
import { DeviceChannel, DeviceChannelOpenParam, LogHandler } from '../public/device-channel';
import { AndroidDeviceAgentService } from '../services/device-agent/android-device-agent-service';
import { AndroidAdbProfileService } from '../services/profile/android-profiler';
import { ProfileServices } from '../services/profile/profile-service';
import { StreamingService } from '../services/streaming/streaming-service';
import { AndroidSystemInfoService } from '../services/system-info/android-system-info-service';
import { Zombieable } from '../services/zombie/zombie-component';
import { ZombieServiceInstance } from '../services/zombie/zombie-service';
import { DevicePortContext } from '../types/device-port-context';
import { createPortContext } from './util';

type DeviceControl = PrivateProtocol.DeviceControl;

export class AndroidLogClosable implements Closable {
  constructor(private readonly childProcess: ChildProcess, private readonly printable?: Printable) {}

  close(): void {
    killChildProcess(this.childProcess).catch((error) => {
      this.printable?.error?.('android logcat close failed', { error: errorify(error) });
    });
  }
}

export class AndroidChannel implements DeviceChannel {
  private _gamiumContext: GamiumContext | null = null;

  get serial(): string {
    return this._serial;
  }
  get platform(): Platform {
    return Platform.PLATFORM_ANDROID;
  }
  get info(): DeviceSystemInfo {
    return this._info;
  }
  get portContext(): DevicePortContext {
    return this._portContext;
  }

  protected constructor(
    private readonly _serial: Serial,
    private readonly _info: DeviceSystemInfo,
    private readonly _portContext: DevicePortContext,
    private readonly _deviceAgent: AndroidDeviceAgentService,
    private readonly _profilers: ProfileServices,
    private readonly _streaming: StreamingService,
    private _appiumContext: AppiumContextProxy,
    private readonly _appiumDeviceWebDriverHandler: AppiumDeviceWebDriverHandler,
    private readonly logger: FilledPrintable,
    private isClosed = false,
  ) {
    this.logger.info(`AndroidChannel created: ${this.serial}`);
  }

  public static async create(
    param: DeviceChannelOpenParam,
    streaming: StreamingService,
    appiumService: AppiumService,
    gamiumService: GamiumService,
    httpRequestRelayService: HttpRequestRelayService,
    appiumEndpointHandlerService: AppiumEndpointHandlerService,
    doguLogger: DoguLogger,
  ): Promise<AndroidChannel> {
    ZombieServiceInstance.deleteAllComponentsIfExist((zombieable: Zombieable): boolean => {
      return zombieable.serial === param.serial && zombieable.platform === Platform.PLATFORM_ANDROID;
    }, 'kill previous zombie');

    const { serial, deviceAgentDevicePort } = param;
    const platform = Platform.PLATFORM_ANDROID;

    const systemInfoService = new AndroidSystemInfoService();
    const systemInfo = await systemInfoService.createSystemInfo(serial);

    const version = semver.coerce(systemInfo.version);
    if (version && semver.lt(version, '8.0.0')) {
      throw new Error(`Android version must be 8 or higher. current version: ${version}`);
    }

    let portContext = portContextes.get(serial);
    if (portContext == null) {
      portContext = await createPortContext(serial);
      portContextes.set(serial, portContext);
    }

    const logger = createAdaLogger(param.serial);
    const deviceAgent = new AndroidDeviceAgentService(serial, systemInfo, '127.0.0.1', portContext.freeHostPort1, deviceAgentDevicePort, logger);
    await deviceAgent.wakeUp();
    await deviceAgent.install();

    const appiumContextProxy = appiumService.createAppiumContext(platform, serial, 'builtin', portContext.freeHostPort3);
    ZombieServiceInstance.addComponent(appiumContextProxy);

    const appiumDeviceWebDriverHandler = new AppiumDeviceWebDriverHandler(platform, serial, appiumContextProxy, httpRequestRelayService, appiumEndpointHandlerService, doguLogger);

    const deviceChannel = new AndroidChannel(
      serial,
      systemInfo,
      portContext,
      deviceAgent,
      // [new AndroidAdbProfileService(), new AndroidDeviceAgentProfileService(deviceAgent)],
      [new AndroidAdbProfileService()],
      streaming,
      appiumContextProxy,
      appiumDeviceWebDriverHandler,
      logger,
    );

    await deviceAgent.connect();
    await streaming.deviceConnected(serial, {
      serial,
      platform: Platform.PLATFORM_ANDROID,
      screenUrl: deviceAgent.screenUrl,
      inputUrl: deviceAgent.inputUrl,
      screenWidth: 0 < systemInfo.graphics.displays.length ? systemInfo.graphics.displays[0].resolutionX : 0,
      screenHeight: 0 < systemInfo.graphics.displays.length ? systemInfo.graphics.displays[0].resolutionY : 0,
    });

    const gamiumContext = gamiumService.openGamiumContext(deviceChannel);
    deviceChannel.gamiumContext = gamiumContext;

    return deviceChannel;
  }

  async close(): Promise<void> {
    this.logger.info(`AndroidChannel closed: ${this.serial}`);
    await this._gamiumContext?.close().catch((error) => {
      this.logger.error('android gamium context close failed', { error: errorify(error) });
    });
    ZombieServiceInstance.deleteComponent(this._appiumContext);
    ZombieServiceInstance.deleteComponent(this._deviceAgent, `AndroidChannel closed: ${this.serial}`);
    ZombieServiceInstance.deleteAllComponentsIfExist((zombieable: Zombieable): boolean => {
      return zombieable.serial === this.serial && zombieable.platform === Platform.PLATFORM_ANDROID;
    }, 'kill serial bound zombies');
    this.isClosed = true;
  }

  async queryProfile(methods: ProfileMethod[] | ProfileMethod): Promise<FilledRuntimeInfo> {
    const methodList = Array.isArray(methods) ? methods : [methods];
    const results = await Promise.allSettled(this._profilers.map((profiler) => profiler.profile(this.serial, methodList)));
    const result = results.reduce((acc, result) => {
      if (result.status === 'fulfilled') {
        Object.keys(acc).forEach((key) => {
          const accDesc = Object.getOwnPropertyDescriptor(acc, key);
          const resultDesc = Object.getOwnPropertyDescriptor(result.value, key);
          if (!accDesc || !Array.isArray(accDesc?.value) || accDesc.value.length !== 0 || !resultDesc || !Array.isArray(resultDesc?.value)) {
            return;
          }
          // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
          accDesc.value.push(...resultDesc.value);
        });
        return acc;
      } else {
        this.logger.error('profile failed.', { reason: result.reason });
        return acc;
      }
    }, RuntimeInfo.fromPartial({}));
    this.logger.verbose('android profile result', { result });
    return {
      ...result,
      platform: Platform.PLATFORM_ANDROID,
      localTimeStamp: new Date(),
    };
  }

  startStreamingWebRTC(offer: StreamingOfferDto): Promise<ProtoRTCPeerDescription> {
    throw new Error('Method not supported.');
  }

  async startStreamingWebRtcWithTrickle(offer: StreamingOfferDto): Promise<Observable<StreamingAnswer>> {
    const { value } = offer;
    const { $case } = value;
    if ($case !== 'startStreaming') {
      throw new Error('invalid offer');
    }
    const { startStreaming } = value;
    const { option } = startStreaming;
    const screenOption = { ...option.screen } as { [key: string]: unknown };
    const mergedCaptureOption: ScreenCaptureOption = lodash.merge(DefaultScreenCaptureOption(), screenOption as unknown as ScreenCaptureOption);
    await this._deviceAgent.sendWithProtobuf('dcDaApplyStreamingOptionParam', 'dcDaApplyStreamingOptionReturn', { option: { screen: mergedCaptureOption } });

    return this._streaming.startStreamingWithTrickle(this.serial, offer);
  }

  startRecord(option: ScreenRecordOption): Promise<ErrorResult> {
    return Promise.resolve(this._streaming.startRecord(this.serial, option));
  }

  stopRecord(): Promise<ErrorResult> {
    return Promise.resolve(this._streaming.stopRecord(this.serial));
  }

  async control(control: DeviceControl): Promise<void> {
    await this._deviceAgent.sendWithProtobuf('dcDaControlParam', 'dcDaControlReturn', {
      control: { ...control, position: control.position! },
    });
  }

  async turnScreen(isOn: boolean): Promise<void> {
    if (isOn) await Adb.turnOnScreen(this.serial);
    else await Adb.turnOffScreen(this.serial);
  }

  async reboot(): Promise<void> {
    await Adb.reboot(this.serial);
  }

  /**
   * @note reset android
   * adb -s $DOGU_DEVICE_SERIAL shell cmd testharness enable
   */
  async reset(): Promise<void> {
    await Adb.reset(this.serial);
  }

  async killOnPort(port: number): Promise<void> {
    await Adb.killOnPort(this.serial, port);
  }

  async forward(hostPort: number, devicePort: number, printable?: Printable): Promise<void> {
    await Adb.forward(this.serial, hostPort, devicePort, printable);
  }

  async unforward(hostPort: number): Promise<void> {
    await Adb.unforward(this.serial, hostPort);
  }

  async subscribeLog(args: string[], handler: LogHandler, printable?: Printable): Promise<Closable> {
    const { stdout, stderr } = await Adb.logcatClear(this.serial, printable);
    if (stdout) {
      printable?.verbose?.(`adb logcat clear stdout: ${stdout}`);
    }
    if (stderr) {
      printable?.verbose?.(`adb logcat clear stderr: ${stderr}`);
    }
    const child = Adb.logcat(this.serial, args, handler, printable);
    return new AndroidLogClosable(child, printable);
  }

  private async getManifestFromApp(appPath: string): Promise<Manifest> {
    const reader = await open(appPath);
    const manifest = await reader.readManifest();
    return manifest;
  }

  async uninstallApp(appPath: string, printable?: Printable): Promise<void> {
    const stat = await fs.promises.stat(appPath).catch(() => null);
    if (!stat) {
      throw new Error(`app not found: ${appPath}`);
    }
    const manifest = await this.getManifestFromApp(appPath);
    if (!manifest.package) {
      throw new Error(`Unexpected value. app path: ${appPath}, ${stringify(manifest)}`);
    }
    await Adb.uninstallApp(this.serial, manifest.package, false, printable);
  }

  /**
   * @note if install failed with INSTALL_FAILED_UPDATE_INCOMPATIBLE then uninstall with keep data and install again
   */
  async installApp(appPath: string, printable?: Printable): Promise<void> {
    const logger = printable ? printable : this.logger;
    logger.info(`installing app: ${appPath}`);
    const stat = await fs.promises.stat(appPath).catch(() => null);
    if (!stat) {
      throw new Error(`app not found: ${appPath}`);
    } else {
      logger.info(`app size: ${stat.size}`);
    }
    const { error, stdout, stderr } = await Adb.installAppWithReturningStdoutStderr(this.serial, appPath, 5 * 60 * 1000, logger)
      .then(({ stdout, stderr }) => {
        return { error: null, stdout, stderr };
      })
      .catch((error) => {
        return { error: errorify(error), stdout: '', stderr: '' };
      });
    const FallbackKeyward = 'INSTALL_FAILED_UPDATE_INCOMPATIBLE';
    const hasFallbackKeyward = stringify(error).includes(FallbackKeyward) || stdout.includes(FallbackKeyward) || stderr.includes(FallbackKeyward);
    if (!hasFallbackKeyward) {
      if (error) {
        throw error;
      } else {
        if (stdout) {
          logger.info(`adb install stdout: ${stdout}`);
        }
        if (stderr) {
          logger.info(`adb install stderr: ${stderr}`);
        }
        return;
      }
    }
    logger.info(`adb install failed with ${FallbackKeyward}. uninstall with keep data and install again`);
    const menifest = await this.getManifestFromApp(appPath);
    if (!menifest.package) {
      throw new Error(`Unexpected value. app path: ${appPath}, ${stringify(menifest)}`);
    }
    await Adb.uninstallApp(this.serial, menifest.package, true, printable);
    await Adb.installApp(this.serial, appPath, printable);
  }

  async runApp(appPath: string, printable?: Printable): Promise<void> {
    await Adb.turnOnScreen(this.serial).catch((error) => {
      this.logger.error('adb.runApp.turnOnScreen', { error: errorify(error) });
    });
    const manifest = await this.getManifestFromApp(appPath);
    if (!manifest.package || !manifest.application?.launcherActivities || manifest.application.launcherActivities.length < 1) {
      throw new Error(`Unexpected value. app path: ${appPath}, ${stringify(manifest)}`);
    }
    const activityName = manifest.application.launcherActivities[0].name;
    if (!activityName) {
      throw new Error(`Unexpected value. app path: ${appPath}, ${stringify(manifest)}`);
    }
    await Adb.runApp(this.serial, manifest.package, activityName, printable);
  }

  /**
   * @note connect to wifi script
   * adb -s $DOGU_DEVICE_SERIAL install $DOGU_ADB_JOIN_WIFI_APK
   * adb -s $DOGU_DEVICE_SERIAL shell am start -n com.steinwurf.adbjoinwifi/.MainActivity -e ssid $DOGU_WIFI_SSID -e password_type WPA -e password $DOGU_WIFI_PASSWORD
   */
  async joinWifi(ssid: string, password: string): Promise<void> {
    await this.installApp(pathMap().common.adbJoinWifiApk);
    /**
     * @note Adb.Shell() is not used because password can remain in the log.
     */
    const appName = 'com.steinwurf.adbjoinwifi';
    await new Promise<void>((resolve, reject) => {
      execFile(
        HostPaths.android.adbPath(env.ANDROID_HOME),
        ['-s', this.serial, 'shell', `am start -n ${appName}/.MainActivity -e ssid ${ssid} -e password_type WPA -e password ${password}`],
        (error, stdout, stderr) => {
          if (error) {
            reject(error);
          } else {
            this.logger.info(`join wifi stdout: ${stdout} stderr: ${stderr}`);
            resolve();
          }
        },
      );
    });
    let isWifiEnabled = false;
    for (let tryCount = 0; tryCount < 10; tryCount++) {
      const { stdout } = await Adb.shell(this.serial, 'dumpsys wifi');
      if (stdout.includes('Wi-Fi is enabled')) {
        this.logger.info(`join wifi success. serial: ${this.serial}, ssid: ${ssid}`);
        isWifiEnabled = true;
        break;
      }
      await delay(3 * 1000);
    }
    if (!isWifiEnabled) {
      throw new Error(`join wifi failed. serial: ${this.serial}, ssid: ${ssid}`);
    }
    await Adb.shell(this.serial, `am force-stop ${appName}`).catch((error) => {
      this.logger.error('adb.joinWifi.force-stop', { error: errorify(error) });
    });
  }

  getAppiumContext(): AppiumContext {
    return this._appiumContext;
  }

  async switchAppiumContext(key: AppiumContextKey): Promise<AppiumContext> {
    await this._appiumContext.switchAppiumContext(key);
    return this._appiumContext;
  }

  set gamiumContext(context: GamiumContext | null) {
    if (this._gamiumContext) {
      throw new Error('Gamium context is already set');
    }
    this._gamiumContext = context;
  }

  get gamiumContext(): GamiumContext | null {
    return this._gamiumContext;
  }

  getWebDriverHandler(): DeviceWebDriverHandler | null {
    return this._appiumDeviceWebDriverHandler;
  }
}

/**
 * @note The deviceAgent forward port is maintained throughout the process lifecycle.
 * It is difficult to maintain the function of syncing the changed port with go-device-controller and respawning androidDeviceAgentService.
 */
const portContextes = new Map<Serial, DevicePortContext>();
