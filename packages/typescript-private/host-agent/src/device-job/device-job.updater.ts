import { DeviceJobStatusInfo, PrivateDeviceJob, StepStatusInfo } from '@dogu-private/console-host-agent';
import { createConsoleApiAuthHeader, DeviceId, OrganizationId, RoutineDeviceJobId } from '@dogu-private/types';
import { DefaultHttpOptions, Instance, parseAxiosError, Retry } from '@dogu-tech/common';
import { Injectable } from '@nestjs/common';
import { OnEvent } from '@nestjs/event-emitter';
import { lastValueFrom } from 'rxjs';
import { ConsoleClientService } from '../console-client/console-client.service';
import { env } from '../env';
import { DoguLogger } from '../logger/logger';
import { logger } from '../logger/logger.instance';
import { OnDeviceJobPostProcessCompletedEvent, OnDeviceJobPrePocessStartedEvent } from './device-job.events';

@Injectable()
export class DeviceJobUpdater {
  constructor(private readonly consoleClientService: ConsoleClientService, private readonly logger: DoguLogger) {}

  @OnEvent(OnDeviceJobPostProcessCompletedEvent.key)
  async onDeviceJobPostProcessCompleted(value: Instance<typeof OnDeviceJobPostProcessCompletedEvent.value>): Promise<void> {
    const { organizationId, deviceId, routineDeviceJobId, deviceJobStatusInfo, stepStatusInfos } = value;
    await this.updateDeviceJobStatus(organizationId, deviceId, routineDeviceJobId, deviceJobStatusInfo, stepStatusInfos);
  }

  @OnEvent(OnDeviceJobPrePocessStartedEvent.key)
  async OnDeviceJobPrePocessStarted(value: Instance<typeof OnDeviceJobPrePocessStartedEvent.value>): Promise<void> {
    const { organizationId, deviceId, routineDeviceJobId, localStartedAt } = value;
    await this.updateDeviceJobLocalStartedAt(organizationId, deviceId, routineDeviceJobId, localStartedAt);
  }

  @Retry({ printable: logger })
  private async updateDeviceJobLocalStartedAt(organizationId: OrganizationId, deviceId: DeviceId, routineDeviceJobId: RoutineDeviceJobId, localStartedAt: Date): Promise<void> {
    const pathProvider = new PrivateDeviceJob.updateDeviceJobLocalStartedAt.pathProvider(organizationId, deviceId, routineDeviceJobId);
    const path = PrivateDeviceJob.updateDeviceJobLocalStartedAt.resolvePath(pathProvider);
    const requestBody: Instance<typeof PrivateDeviceJob.updateDeviceJobLocalStartedAt.requestBody> = {
      localStartedAt,
    };
    await lastValueFrom(
      this.consoleClientService.service.patch(path, requestBody, {
        ...createConsoleApiAuthHeader(env.DOGU_HOST_TOKEN),
        timeout: DefaultHttpOptions.request.timeout,
      }),
    ).catch((error) => {
      this.logger.error('Failed to update deviceJob localStartedAt', {
        organizationId,
        deviceId,
        routineDeviceJobId,
        localStartedAt,
        error: parseAxiosError(error),
      });
      throw error;
    });
    this.logger.verbose('DeviceJob localStartedAt updated', { organizationId, deviceId, routineDeviceJobId, localStartedAt });
  }

  @Retry({ printable: logger })
  private async updateDeviceJobStatus(
    organizationId: OrganizationId,
    deviceId: DeviceId,
    routineDeviceJobId: RoutineDeviceJobId,
    deviceJobStatusInfo: DeviceJobStatusInfo,
    stepStatusInfos: StepStatusInfo[],
  ): Promise<void> {
    const pathProvider = new PrivateDeviceJob.updateDeviceJobStatus.pathProvider(organizationId, deviceId, routineDeviceJobId);
    const path = PrivateDeviceJob.updateDeviceJobStatus.resolvePath(pathProvider);
    const requestBody: Instance<typeof PrivateDeviceJob.updateDeviceJobStatus.requestBody> = {
      deviceJobStatusInfo,
      stepStatusInfos,
    };
    await lastValueFrom(
      this.consoleClientService.service.patch(path, requestBody, {
        ...createConsoleApiAuthHeader(env.DOGU_HOST_TOKEN),
        timeout: DefaultHttpOptions.request.timeout,
      }),
    ).catch((error) => {
      this.logger.error('Failed to update deviceJob status', {
        organizationId,
        deviceId,
        routineDeviceJobId,
        deviceJobStatusInfo,
        error: parseAxiosError(error),
      });
      throw error;
    });
    this.logger.verbose('DeviceJob status updated', { organizationId, deviceId, routineDeviceJobId, deviceJobStatusInfo });
  }
}