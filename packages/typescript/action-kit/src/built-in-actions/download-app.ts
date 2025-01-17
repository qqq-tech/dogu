import { Printable } from '@dogu-tech/common';
import { DeviceHostClient } from '@dogu-tech/device-client';
import { PlatformType } from '@dogu-tech/types';
import fs from 'fs';
import path from 'path';
import { ConsoleActionClient } from '../console-action-client';
import { HostPaths } from '@dogu-tech/node';

export async function downloadApp(
  printable: Printable,
  consoleActionClient: ConsoleActionClient,
  deviceHostClient: DeviceHostClient,
  DOGU_DEVICE_PLATFORM: PlatformType,
  DOGU_HOST_WORKSPACE_PATH: string,
  appVersion: string,
): Promise<string> {
  function getExtension(platform: PlatformType): string {
    switch (platform) {
      case 'android':
        return 'apk';
      case 'ios':
        return 'ipa';
      default:
        throw new Error(`Invalid platform: ${platform}`);
    }
  }

  const extension = getExtension(DOGU_DEVICE_PLATFORM);
  printable.info('Get application list for', {
    version: appVersion,
    extension,
  });
  const { applications } = await consoleActionClient.getApplicationList({
    version: appVersion,
    extension,
  });
  if (applications.length === 0) {
    throw new Error(`No application found for version ${appVersion} and extension ${extension}`);
  }
  const application = applications[0];
  printable.info('Get application download url', {
    application,
  });
  const { fileName, fileSize } = application;
  const { url } = await consoleActionClient.getApplicationDownloadUrl(application.id);
  const hostSharesPath = HostPaths.hostSharesPath(DOGU_HOST_WORKSPACE_PATH);
  const filePath = path.resolve(hostSharesPath, fileName);
  printable.info('Download application', {
    url,
    filePath,
  });
  await deviceHostClient.downloadSharedResource(filePath, url, fileSize);
  printable.info('Downloaded application', {
    url,
    filePath,
  });
  const stat = await fs.promises.stat(filePath);
  if (fileSize !== stat.size) {
    throw new Error(`Downloaded file size mismatch. Expected: ${fileSize}, actual: ${stat.size}`);
  }
  return filePath;
}
