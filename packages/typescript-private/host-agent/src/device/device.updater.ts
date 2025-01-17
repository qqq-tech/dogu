import { PrivateDevice } from '@dogu-private/console-host-agent';
import { createConsoleApiAuthHeader } from '@dogu-private/types';
import { DefaultHttpOptions, Instance, parseAxiosError, Retry, transformAndValidate } from '@dogu-tech/common';
import { Injectable } from '@nestjs/common';
import { OnEvent } from '@nestjs/event-emitter';
import { lastValueFrom } from 'rxjs';
import { ConsoleClientService } from '../console-client/console-client.service';
import { env } from '../env';
import { DoguLogger } from '../logger/logger';
import { logger } from '../logger/logger.instance';
import { OnDeviceResolvedEvent } from './device.events';

@Injectable()
export class DeviceUpdater {
  constructor(private readonly consoleClientService: ConsoleClientService, private readonly logger: DoguLogger) {}

  @OnEvent(OnDeviceResolvedEvent.key)
  async onDeviceResolved(value: Instance<typeof OnDeviceResolvedEvent.value>): Promise<void> {
    await this.updateDevice(value);
  }

  @Retry({ printable: logger })
  private async updateDevice(value: Instance<typeof OnDeviceResolvedEvent.value>): Promise<void> {
    const { organizationId, deviceId, hostId, version, model, manufacturer, resolutionWidth, resolutionHeight, platform } = value;
    const pathProvider = new PrivateDevice.updateDevice.pathProvider(organizationId, deviceId);
    const path = PrivateDevice.updateDevice.resolvePath(pathProvider);
    const body: Instance<typeof PrivateDevice.updateDevice.requestBody> = {
      hostId,
      version,
      model,
      manufacturer,
      resolutionWidth,
      resolutionHeight,
      platform,
    };
    const bodyValidated = await transformAndValidate(PrivateDevice.updateDevice.requestBody, body);
    await lastValueFrom(
      this.consoleClientService.service.patch(path, bodyValidated, {
        ...createConsoleApiAuthHeader(env.DOGU_HOST_TOKEN),
        timeout: DefaultHttpOptions.request.timeout,
      }),
    ).catch((error) => {
      this.logger.error('Failed to update device', {
        organizationId,
        deviceId,
        body,
        error: parseAxiosError(error),
      });
      throw error;
    });
  }
}
