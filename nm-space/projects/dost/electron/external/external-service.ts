import { errorify } from '@dogu-tech/common';
import { ipcMain } from 'electron';
import { setInterval } from 'timers/promises';
import { DotEnvConfigKey } from '../../src/shares/dot-env-config';
import { DownloadProgress, externalCallbackKey, externalKey, ExternalKey, ValidationCheckOption } from '../../src/shares/external';
import { AppConfigService } from '../app-config/app-config-service';
import { DotEnvConfigService } from '../dot-env-config/dot-env-config-service';
import { logger } from '../log/logger.instance';
import { StdLogCallbackService } from '../log/std-log-callback-service';
import { WindowService } from '../window/window-service';
import { ExternalUnitCallback, IExternalUnit } from './external-unit';
import { AndroidSdkExternalUnit } from './units/android-sdk-external-unit';
import { AppiumExternalUnit } from './units/appium-external-unit';
import { AppiumUiAutomator2DriverExternalUnit } from './units/appium-uiautomator2-driver-external-unit';
import { AppiumXcUiTestDriverExternalUnit } from './units/appium-xcuitest-driver-external-unit';
import { IdaBuildExternalUnit } from './units/ida-build-external-unit';
import { JdkExternalUnit } from './units/jdk-external-unit';
import { LibimobledeviceExternalUnit } from './units/libimobiledevice-external-unit';
import { SeleniumServerExternalUnit } from './units/selenium-server-external-unit';
import { WdaBuildExternalUnit } from './units/wda-build-external-unit';
import { XcodeExternalUnit } from './units/xcode-external-unit';

export class ExternalService {
  static instance: ExternalService;

  static async open(
    dotEnvConfigService: DotEnvConfigService,
    stdLogCallbackService: StdLogCallbackService,
    appConfigService: AppConfigService,
    windowService: WindowService,
  ): Promise<void> {
    ExternalService.instance = new ExternalService(dotEnvConfigService, stdLogCallbackService, appConfigService, windowService);
    const { instance } = ExternalService;
    instance.registerUnits();
    instance.registerHandlers();
    await instance.validateSupportedPlatform();
    instance.startLoopUpdateIsSupportedPlatformValid();
  }

  private units: Map<ExternalKey, IExternalUnit> = new Map();
  private unitCallbackCreator: (key: ExternalKey) => ExternalUnitCallback;

  private constructor(
    private readonly dotEnvConfigService: DotEnvConfigService,
    private readonly stdLogCallbackService: StdLogCallbackService,
    private readonly appConfigService: AppConfigService,
    private readonly windowService: WindowService,
  ) {
    this.unitCallbackCreator = (key: ExternalKey) => {
      return {
        onDownloadStarted: () => {
          this.windowService.window?.webContents.send(externalCallbackKey.onDownloadStarted, key);
        },
        onDownloadInProgress: (progress: DownloadProgress) => {
          this.windowService.window?.webContents.send(externalCallbackKey.onDownloadInProgress, key, progress);
        },
        onDownloadCompleted: () => {
          this.windowService.window?.webContents.send(externalCallbackKey.onDownloadCompleted, key);
        },
        onInstallStarted: () => {
          this.windowService.window?.webContents.send(externalCallbackKey.onInstallStarted, key);
        },
        onInstallCompleted: () => {
          this.windowService.window?.webContents.send(externalCallbackKey.onInstallCompleted, key);
        },
      };
    };
  }

  private registerUnits(): void {
    this.registerUnit('jdk', (unitCallback) => new JdkExternalUnit(this.dotEnvConfigService, this.stdLogCallbackService, this.windowService, unitCallback));
    this.registerUnit(
      'android-sdk',
      (unitCallback) => new AndroidSdkExternalUnit(this.dotEnvConfigService, this.stdLogCallbackService, this.appConfigService, this.windowService, unitCallback),
    );
    this.registerUnit('appium', (unitCallback) => new AppiumExternalUnit(this.dotEnvConfigService, this.stdLogCallbackService, unitCallback));
    this.registerUnit('appium-uiautomator2-driver', (unitCallback) => new AppiumUiAutomator2DriverExternalUnit(this.dotEnvConfigService, this.stdLogCallbackService, unitCallback));
    this.registerUnit('xcode', () => new XcodeExternalUnit(this.stdLogCallbackService));
    this.registerUnit('appium-xcuitest-driver', (unitCallback) => new AppiumXcUiTestDriverExternalUnit(this.dotEnvConfigService, this.stdLogCallbackService, unitCallback));
    this.registerUnit('libimobiledevice', (unitCallback) => new LibimobledeviceExternalUnit(this.stdLogCallbackService, unitCallback));
    // this.registerUnit('webdriver-manager', (unitCallback) => new WebdriverManagerExternalUnit(this.stdLogCallbackService, unitCallback));
    this.registerUnit('web-driver-agent-build', () => new WdaBuildExternalUnit(this.stdLogCallbackService));
    this.registerUnit('ios-device-agent-build', () => new IdaBuildExternalUnit(this.stdLogCallbackService));
    // this.registerUnit('puppeteer-browsers', (unitCallback) => new PuppeteerBrowsersExternalUnit(this.stdLogCallbackService, unitCallback));
    // this.registerUnit('chrome-browser', (unitCallback) => new ChromeBrowserExternalUnit(this.stdLogCallbackService, unitCallback));
    // this.registerUnit('firefox-browser', (unitCallback) => new FirefoxBrowserExternalUnit(this.stdLogCallbackService, unitCallback));
    // this.registerUnit('chrome-driver', (unitCallback) => new ChromeDriverExternalUnit(this.stdLogCallbackService, unitCallback));
    this.registerUnit('selenium-server', (unitCallback) => new SeleniumServerExternalUnit(this.windowService, this.stdLogCallbackService, unitCallback));
  }

  private registerHandlers(): void {
    ipcMain.handle(externalKey.getKeys, () => this.getKeys());
    ipcMain.handle(externalKey.isPlatformSupported, (_, key: ExternalKey) => this.getUnit(key).isPlatformSupported());
    ipcMain.handle(externalKey.getName, (_, key: ExternalKey) => this.getName(key));
    ipcMain.handle(externalKey.getEnvKeys, (_, key: ExternalKey) => this.getUnit(key).getEnvKeys());
    ipcMain.handle(externalKey.getEnvValue, (_, key: ExternalKey, dotEnvConfigKey: DotEnvConfigKey) => this.getEnvValue(key, dotEnvConfigKey));
    ipcMain.handle(externalKey.writeEnvValue, (_, key: ExternalKey, dotEnvConfigKey: DotEnvConfigKey, value: string) => this.writeEnvValue(key, dotEnvConfigKey, value));
    ipcMain.handle(externalKey.getLastValidationResult, (_, key: ExternalKey) => this.getUnit(key).lastValidationResult);
    ipcMain.handle(externalKey.isAgreementNeeded, (_, key: ExternalKey) => this.getUnit(key).isAgreementNeeded());
    ipcMain.handle(externalKey.writeAgreement, (_, key: ExternalKey, value: boolean) => this.getUnit(key).writeAgreement(value));
    ipcMain.handle(externalKey.isInstallNeeded, (_, key: ExternalKey) => this.getUnit(key).isInstallNeeded());
    ipcMain.handle(externalKey.isManualInstallNeeded, (_, key: ExternalKey) => this.getUnit(key).isManualInstallNeeded());
    ipcMain.handle(externalKey.install, (_, key: ExternalKey) => this.getUnit(key).install());
    ipcMain.handle(externalKey.cancelInstall, (_, key: ExternalKey) => this.getUnit(key).cancelInstall());
    ipcMain.handle(externalKey.validate, (_, key: ExternalKey) => this.getUnit(key).validate());
    ipcMain.handle(externalKey.isValid, (_, key: ExternalKey) => this.getUnit(key).isValid());
    ipcMain.handle(externalKey.isSupportedPlatformValidationCompleted, () => this.isSupportedPlatformValidationCompleted());
    ipcMain.handle(externalKey.isSupportedPlatformValid, (_, option: ValidationCheckOption) => this.isSupportedPlatformValid(option));
    ipcMain.handle(externalKey.getSupportedPlatformKeys, () => this.getSupportedPlatformKeys());
    ipcMain.handle(externalKey.getTermUrl, (_, key: ExternalKey) => this.getUnit(key).getTermUrl());
  }

  private registerUnit(key: ExternalKey, onRegister: (unitCallback: ExternalUnitCallback) => IExternalUnit): void {
    const unit = onRegister(this.unitCallbackCreator(key));
    this.units.set(key, unit);
  }

  private getUnit(key: ExternalKey): IExternalUnit {
    const unit = this.units.get(key);
    if (!unit) {
      throw new Error(`external tool unit not found. key: ${key}`);
    }
    return unit;
  }

  private getKeys(): ExternalKey[] {
    return [...this.units.keys()];
  }

  private getName(key: ExternalKey): Promise<string> {
    const unit = this.getUnit(key);
    return Promise.resolve(unit.getName());
  }

  private getEnvValue(key: ExternalKey, dotEnvConfigKey: DotEnvConfigKey): string | undefined {
    const unit = this.getUnit(key);
    return this.dotEnvConfigService.get(dotEnvConfigKey);
  }

  private async writeEnvValue(key: ExternalKey, dotEnvConfigKey: DotEnvConfigKey, value: string): Promise<void> {
    const unit = this.getUnit(key);
    await this.dotEnvConfigService.write(dotEnvConfigKey, value);
  }

  private async validateSupportedPlatform(): Promise<void> {
    await Promise.all([...this.units.values()].filter((unit) => unit.isPlatformSupported()).map((unit) => unit.validate()));
  }

  private isSupportedPlatformValidationCompleted(): Promise<boolean> {
    return Promise.resolve([...this.units.values()].filter((unit) => unit.isPlatformSupported()).every((unit) => unit.lastValidationResult !== null));
  }

  private isSupportedPlatformValid(option: ValidationCheckOption): Promise<boolean> {
    if (option.ignoreManual) {
      return Promise.resolve([...this.units.values()].filter((unit) => unit.isPlatformSupported() && !unit.isManualInstallNeeded()).every((unit) => unit.isValid()));
    }
    return Promise.resolve([...this.units.values()].filter((unit) => unit.isPlatformSupported()).every((unit) => unit.isValid()));
  }

  private async updateIsSupportedPlatformValid(): Promise<void> {
    const doguIsSupportedPlatformValid = await this.appConfigService.get<boolean>('DOGU_IS_SUPPORTED_PLATFORM_VALID');
    const isSupportedPlatformValid = await this.isSupportedPlatformValid({ ignoreManual: false });
    if (doguIsSupportedPlatformValid !== isSupportedPlatformValid) {
      await this.appConfigService.set('DOGU_IS_SUPPORTED_PLATFORM_VALID', isSupportedPlatformValid);
    }
  }

  private async loopUpdateIsSupportedPlatformValid(): Promise<void> {
    for await (const _ of setInterval(3 * 1000)) {
      await this.updateIsSupportedPlatformValid();
    }
  }

  private startLoopUpdateIsSupportedPlatformValid(): void {
    this.loopUpdateIsSupportedPlatformValid().catch((error) => {
      logger.error('loopUpdateIsSupportedPlatformValid error', { error: errorify(error) });
    });
  }

  private getSupportedPlatformKeys(): Promise<ExternalKey[]> {
    return Promise.resolve([...this.units.keys()].filter((key) => this.getUnit(key).isPlatformSupported()));
  }
}
