import {
  DefaultDeviceSystemInfo,
  DeviceAgentPort,
  DeviceAgentSecondPort,
  DeviceAgentThirdPort,
  DeviceSystemInfo,
  ErrorResult,
  FilledRuntimeInfo,
  Platform,
  PrivateProtocol,
  ProfileMethod,
  ProtoRTCPeerDescription,
  RuntimeInfo,
  ScreenRecordOption,
  Serial,
  StreamingAnswer,
} from '@dogu-private/types';
import { Closable, Printable, PromiseOrValue, stringify } from '@dogu-tech/common';
import { StreamingOfferDto } from '@dogu-tech/device-client-common';
import { ChildProcess } from '@dogu-tech/node';
import { Observable } from 'rxjs';
import systeminformation from 'systeminformation';
import { DeviceWebDriver } from '../../alias';
import { AppiumContext, AppiumContextKey } from '../../appium/appium.context';
import { DeviceWebDriverHandler } from '../../device-webdriver/device-webdriver.common';
import { SeleniumDeviceWebDriverHandler } from '../../device-webdriver/selenium.device-webdriver.handler';
import { GamiumContext } from '../../gamium/gamium.context';
import { HttpRequestRelayService } from '../../http-request-relay/http-request-relay.common';
import { DoguLogger } from '../../logger/logger';
import { logger } from '../../logger/logger.instance';
import { SeleniumService } from '../../selenium/selenium.service';
import { DeviceChannel, DeviceChannelOpenParam, LogHandler } from '../public/device-channel';
import { DeviceAgentService } from '../services/device-agent/device-agent-service';
import { NullDeviceAgentService } from '../services/device-agent/null-device-agent-service';
import { DesktopProfileService } from '../services/profile/desktop-profiler';
import { ProfileService } from '../services/profile/profile-service';
import { StreamingService } from '../services/streaming/streaming-service';
import { DevicePortContext } from '../types/device-port-context';
import { checkTime } from '../util/check-time';

type DeviceControl = PrivateProtocol.DeviceControl;

export class MacosChannel implements DeviceChannel {
  constructor(
    private readonly _serial: Serial,
    private readonly _info: DeviceSystemInfo,
    private readonly _profile: ProfileService,
    private readonly _streaming: StreamingService,
    private readonly _deviceAgent: DeviceAgentService,
    private readonly _seleniumDeviceWebDriverHandler: SeleniumDeviceWebDriverHandler,
  ) {}

  get serial(): Serial {
    return this._serial;
  }

  get platform(): Platform {
    return Platform.PLATFORM_MACOS;
  }

  get info(): DeviceSystemInfo {
    return this._info;
  }

  get portContext(): DevicePortContext {
    return {
      freeHostPort1: DeviceAgentPort,
      freeHostPort2: DeviceAgentSecondPort,
      freeHostPort3: DeviceAgentThirdPort,
    };
  }

  static async create(
    param: DeviceChannelOpenParam,
    streaming: StreamingService,
    httpRequestRelayService: HttpRequestRelayService,
    seleniumEndpointHandlerService: DeviceWebDriver.SeleniumEndpointHandlerService,
    seleniumService: SeleniumService,
    doguLogger: DoguLogger,
  ): Promise<DeviceChannel> {
    const platform = Platform.PLATFORM_MACOS;
    const deviceAgent = new NullDeviceAgentService();

    const osInfo = await checkTime('os', systeminformation.osInfo());
    const info: DeviceSystemInfo = {
      ...DefaultDeviceSystemInfo(),
      nickname: osInfo.hostname,
      version: osInfo.release,
      system: await checkTime('system', systeminformation.system()),
      os: { ...osInfo, platform },
      uuid: await checkTime('uuid', systeminformation.uuid()),
      cpu: await checkTime('cpu', systeminformation.cpu()),
    };
    await streaming.deviceConnected(param.serial, {
      serial: param.serial,
      platform,
      screenUrl: deviceAgent.screenUrl,
      inputUrl: deviceAgent.inputUrl,
      screenWidth: 0 < info.graphics.displays.length ? info.graphics.displays[0].resolutionX : 0,
      screenHeight: 0 < info.graphics.displays.length ? info.graphics.displays[0].resolutionY : 0,
    });
    const seleniumDeviceWebDriverHandler = new SeleniumDeviceWebDriverHandler(
      platform,
      param.serial,
      seleniumService,
      httpRequestRelayService,
      seleniumEndpointHandlerService,
      doguLogger,
    );
    const deviceChannel = new MacosChannel(param.serial, info, new DesktopProfileService(), streaming, deviceAgent, seleniumDeviceWebDriverHandler);
    return Promise.resolve(deviceChannel);
  }

  async queryProfile(methods: ProfileMethod[] | ProfileMethod): Promise<FilledRuntimeInfo> {
    const methodList = Array.isArray(methods) ? methods : [methods];
    const result = await this._profile.profile(this.serial, methodList);
    return {
      ...RuntimeInfo.fromPartial(result),
      platform: Platform.PLATFORM_MACOS,
      localTimeStamp: new Date(),
    };
  }

  startStreamingWebRTC(offer: StreamingOfferDto): Promise<ProtoRTCPeerDescription> {
    return Promise.resolve(this._streaming.startStreaming(this.serial, offer));
  }

  startStreamingWebRtcWithTrickle(offer: StreamingOfferDto): Promise<Observable<StreamingAnswer>> {
    return Promise.resolve(this._streaming.startStreamingWithTrickle(this.serial, offer));
  }

  startRecord(option: ScreenRecordOption): Promise<ErrorResult> {
    return Promise.resolve(this._streaming.startRecord(this.serial, option));
  }

  stopRecord(): Promise<ErrorResult> {
    return Promise.resolve(this._streaming.stopRecord(this.serial));
  }

  control(control: DeviceControl): void {
    throw new Error('Method not implemented.');
  }

  turnScreen(isOn: boolean): void {
    throw new Error('Method not implemented.');
  }

  reboot(): void {
    throw new Error('Method not implemented.');
  }

  async killOnPort(port: number): Promise<void> {
    await ChildProcess.exec(`lsof -i tcp:${port} | grep LISTEN | awk '{print $2}' | xargs kill -9`, {}, logger);
  }

  forward(hostPort: number, devicePort: number, printable?: Printable): void {
    // noop
  }

  unforward(hostPort: number): void {
    // noop
  }

  uninstallApp(appPath: string): void {
    throw new Error('Method not implemented.');
  }

  installApp(appPath: string): void {
    throw new Error('Method not implemented.');
  }

  runApp(appPath: string): void {
    ChildProcess.spawn(appPath, [], {}, logger).catch((err) => {
      logger.error(`failed to start app`, { error: stringify(err) });
    });
  }

  subscribeLog(args: string[], handler: LogHandler, printable?: Printable | undefined): PromiseOrValue<Closable> {
    throw new Error('Method not implemented.');
  }

  reset(): PromiseOrValue<void> {
    throw new Error('Method not implemented.');
  }

  joinWifi(ssid: string, password: string): PromiseOrValue<void> {
    throw new Error('Method not implemented.');
  }

  getAppiumContext(): null {
    return null;
  }

  switchAppiumContext(key: AppiumContextKey): PromiseOrValue<AppiumContext> {
    throw new Error('Method not implemented.');
  }

  set gamiumContext(context: GamiumContext | null) {
    throw new Error('Method not implemented.');
  }

  get gamiumContext(): GamiumContext | null {
    return null;
  }

  getWebDriverHandler(): DeviceWebDriverHandler | null {
    return this._seleniumDeviceWebDriverHandler;
  }
}
