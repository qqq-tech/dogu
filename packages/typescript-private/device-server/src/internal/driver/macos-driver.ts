import { Platform, Serial } from '@dogu-private/types';
import systeminformation from 'systeminformation';
import { idcLogger } from '../../logger/logger.instance';
import { MacosChannel } from '../channel/macos-channel';
import { DeviceChannel, DeviceChannelOpenParam } from '../public/device-channel';
import { DeviceDriver } from '../public/device-driver';
import { PionStreamingService } from '../services/streaming/pion-streaming-service';
import { StreamingService } from '../services/streaming/streaming-service';

export class MacosDriver implements DeviceDriver {
  private constructor(private readonly streamingService: StreamingService) {}

  static async create(deviceServerPort: number): Promise<MacosDriver> {
    const streaming = await PionStreamingService.create(Platform.PLATFORM_MACOS, deviceServerPort);
    return new MacosDriver(streaming);
  }

  get platform(): Platform {
    return Platform.PLATFORM_MACOS;
  }

  async scanSerials(): Promise<Serial[]> {
    const uuid = await systeminformation.uuid();
    return [uuid.os];
  }

  async openChannel(initParam: DeviceChannelOpenParam): Promise<DeviceChannel> {
    return await MacosChannel.create(initParam, this.streamingService);
  }

  async closeChannel(seial: Serial): Promise<void> {
    return await this.streamingService.deviceDisconnected(seial);
  }

  async reset(): Promise<void> {
    idcLogger.warn('MacosDriver.reset is not implemented');
    return await Promise.resolve();
  }
}