import { InjectRedis } from '@liaoliaots/nestjs-redis';
import { Inject, Injectable } from '@nestjs/common';
import Redis from 'ioredis';
import { config } from '../../../config';
import { DoguLogger } from '../../logger/logger';
import { DeviceConnectionUpdater } from './device-connection-updater';
import { HostConnectionUpdater } from './host-connection-updater';

@Injectable()
export class HeartBeatSystemProcessor {
  constructor(
    @InjectRedis() private readonly redis: Redis,
    @Inject(DeviceConnectionUpdater) private readonly deviceConnectionUpdater: DeviceConnectionUpdater,
    @Inject(HostConnectionUpdater) private readonly hostConnectionUpdater: HostConnectionUpdater,
    private readonly logger: DoguLogger,
  ) {}

  public async update(): Promise<void> {
    await this.updateConnection().catch((error) => {
      this.logger.error(error);
    });
  }
  private async updateConnection(): Promise<void> {
    const value = await this.redis.lpop(config.redis.key.updateConnection);
    if (value === null) {
      return;
    }
    this.deviceConnectionUpdater.update();
    this.hostConnectionUpdater.update();
  }
}
