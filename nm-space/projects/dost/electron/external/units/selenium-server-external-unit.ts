import { PrefixLogger } from '@dogu-tech/common';
import { HostPaths } from '@dogu-tech/node';
import { exec } from 'child_process';
import { download } from 'electron-dl';
import fs from 'fs';
import path from 'path';
import util from 'util';
import { ExternalKey } from '../../../src/shares/external';
import { logger } from '../../log/logger.instance';
import { StdLogCallbackService } from '../../log/std-log-callback-service';
import { WindowService } from '../../window/window-service';
import { ExternalUnitCallback, IExternalUnit } from '../external-unit';

const execAsync = util.promisify(exec);

const Name = 'Selenium Server';
const DownloadUrl = 'https://github.com/SeleniumHQ/selenium/releases/download/selenium-4.10.0/selenium-server-4.10.0.jar';

export class SeleniumServerExternalUnit extends IExternalUnit {
  private readonly logger = new PrefixLogger(logger, `[${Name}]`);

  constructor(private readonly windowService: WindowService, private readonly stdLogCallbackService: StdLogCallbackService, private readonly unitCallback: ExternalUnitCallback) {
    super();
  }

  private info(message: string): void {
    this.stdLogCallbackService.stdout(message);
    this.logger.info(message);
  }

  private warn(message: string): void {
    this.stdLogCallbackService.stderr(message);
    this.logger.warn(message);
  }

  isPlatformSupported(): boolean {
    return true;
  }

  isManualInstallNeeded(): boolean {
    return false;
  }

  getKey(): ExternalKey {
    return 'selenium-server';
  }

  getName(): string {
    return Name;
  }

  getEnvKeys(): string[] {
    return [];
  }

  async validateInternal(): Promise<void> {
    const seleniumServerPath = HostPaths.external.selenium.seleniumServerPath();
    const seleniumServerStat = await fs.promises.stat(seleniumServerPath).catch(() => null);
    if (!seleniumServerStat) {
      throw new Error(`${seleniumServerPath} not installed`);
    }
    if (!seleniumServerStat.isFile()) {
      throw new Error(`${seleniumServerPath} is not a file`);
    }
    const javaHomePath = HostPaths.external.defaultJavaHomePath();
    const javaPath = HostPaths.java.javaPath(javaHomePath);
    const { stdout, stderr } = await execAsync(`${javaPath} -jar ${seleniumServerPath} standalone --version`);
    if (stderr) {
      this.warn(stderr);
    }
    if (stdout) {
      this.info(stdout);
    }
  }

  async install(): Promise<void> {
    const window = this.windowService.window;
    if (!window) {
      throw new Error('window not exist');
    }
    const seleniumServerPath = HostPaths.external.selenium.seleniumServerPath();
    const seleniumDirPath = path.dirname(seleniumServerPath);
    await fs.promises.mkdir(seleniumDirPath, { recursive: true });
    const item = await download(window, DownloadUrl, {
      directory: seleniumDirPath,
      onStarted: (item) => {
        this.unitCallback.onDownloadStarted();
        this.info(`Download started. url: ${item.getURL()}`);
      },
      onProgress: (progress) => {
        this.unitCallback.onDownloadInProgress(progress);
      },
    });
    const savePath = item.getSavePath();
    this.info(`Download complete. path: ${savePath}`);
    this.unitCallback.onDownloadCompleted();
    this.unitCallback.onInstallStarted();
    await fs.promises.rename(savePath, seleniumServerPath);
    this.info(`Install complete. path: ${seleniumServerPath}`);
    this.unitCallback.onInstallCompleted();
  }

  cancelInstall(): void {
    this.logger.warn('cancelInstall not supported');
  }

  uninstall(): void {
    this.logger.warn('uninstall not supported');
  }

  isAgreementNeeded(): boolean {
    return false;
  }

  writeAgreement(): void {
    this.logger.warn('do not need agreement');
  }

  getTermUrl(): string | null {
    return null;
  }
}
