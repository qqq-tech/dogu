import { app, ipcMain } from 'electron';
import isDev from 'electron-is-dev';
import Store from 'electron-store';
import { IAppConfigClient, Key, schema, Schema, appConfigClientKey } from '../../src/shares/app-config';
import { logger } from '../log/logger.instance';
import { ConfigsPath } from '../path-map';
import { DotenvMerger } from './dotenv-merger';

type Client = Store<Schema>;

export class AppConfigService implements IAppConfigClient {
  static instance: AppConfigService;

  static async open(): Promise<void> {
    Store.initRenderer();
    const client = new Store<Schema>({
      name: app.name.toLowerCase(),
      schema,
      accessPropertiesByDotNotation: false,
      cwd: ConfigsPath,
      clearInvalidConfig: true,
      migrations: {
        '0.0.0': (store) => {
          store.clear();
        },
      },
    });
    logger.debug('config path', { path: client.path });
    AppConfigService.instance = new AppConfigService(client);
    const { instance } = AppConfigService;
    await new DotenvMerger().merge(instance);
    ipcMain.handle(appConfigClientKey.get, (_, key: Key) => instance.get(key));
    ipcMain.handle(appConfigClientKey.set, (_, key: Key, value: any) => instance.set(key, value));
    ipcMain.handle(appConfigClientKey.delete, (_, key: Key) => instance.delete(key));
    if (isDev) {
      instance.client.openInEditor();
    }
  }

  private constructor(readonly client: Client) {}

  get<T = any>(key: Key): Promise<T> {
    return Promise.resolve(this.client.get(key) as unknown as T);
  }

  set<T = any>(key: Key, value: T): Promise<void> {
    return Promise.resolve(this.client.set(key, value));
  }

  delete(key: Key): Promise<void> {
    return Promise.resolve(this.client.delete(key));
  }
}