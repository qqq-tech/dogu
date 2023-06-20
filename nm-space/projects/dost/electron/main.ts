import { HostPaths } from '@dogu-tech/node';
import * as Sentry from '@sentry/electron/main';
import { app, BrowserWindow } from 'electron';
import installExtension, { REACT_DEVELOPER_TOOLS } from 'electron-devtools-installer';
import electronDl from 'electron-dl';
import isDev from 'electron-is-dev';
import { SentyDSNUrl } from '../src/shares/constants';
import { AppConfigService } from './app-config/app-config-service';
import { ChildFactory } from './child/child-factory';
import { ChildService } from './child/child-service';
import { DotEnvConfigService } from './dot-env-config/dot-env-config-service';
import { ExternalService } from './external/external-service';
import { FeatureConfigService } from './feature-config/feature-config-service';
import { logger, rendererLogger } from './log/logger.instance';
import { RendererLogService } from './log/renderer-log-service';
import { StdLogCallbackService } from './log/std-log-callback-service';
import { LogsPath } from './path-map';
import { SettingsService } from './settings/settings-service';
import { ThemeService } from './theme/theme-service';
import { TrayService } from './tray/tray-service';
import { UpdaterService } from './updater/updater-service';
import { WindowService } from './window/window-service';

electronDl();

Sentry.init({ dsn: SentyDSNUrl, maxBreadcrumbs: 10000, environment: isDev ? 'development' : 'production' });

app.whenReady().then(async () => {
  logger.addFileTransports(LogsPath);
  rendererLogger.addFileTransports(LogsPath);
  logger.info('bootstrap', { isDev, cwd: process.cwd() });

  // DevTools
  installExtension(REACT_DEVELOPER_TOOLS)
    .then((name) => logger.info(`Added Extension:  ${name}`))
    .catch((err) => logger.error('An error occurred: ', err));

  RendererLogService.open();
  ThemeService.open();
  await AppConfigService.open();
  await FeatureConfigService.open(AppConfigService.instance);
  await DotEnvConfigService.open(AppConfigService.instance);
  await UpdaterService.open(AppConfigService.instance);
  SettingsService.open(DotEnvConfigService.instance);
  TrayService.open();
  WindowService.open();
  StdLogCallbackService.open(WindowService.instance);
  await ExternalService.open(DotEnvConfigService.instance, StdLogCallbackService.instance, AppConfigService.instance, WindowService.instance);
  ChildService.open(AppConfigService.instance);
  await ChildFactory.open(ChildService.instance, AppConfigService.instance, WindowService.instance);

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      WindowService.open();
    }
  });

  app.on('window-all-closed', () => {});

  app.on('quit', async (event, exitCode) => {
    logger.debug('app quit', { exitCode });
    await ChildService.close();
  });
});