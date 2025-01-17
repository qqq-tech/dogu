import { WebSocketSpec } from '@dogu-tech/common';
import { DeviceConnectionState, Platform, Serial } from '@dogu-tech/types';
import { Type } from 'class-transformer';
import { IsEnum, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class DeviceConnectionSubscribeReceiveMessage {
  @IsString()
  @IsNotEmpty()
  serial!: Serial;

  @IsEnum(Platform)
  platform!: Platform;

  @IsString()
  model!: string;

  @IsString()
  version!: string;

  @IsEnum(DeviceConnectionState)
  state!: DeviceConnectionState;

  @IsString()
  manufacturer!: string;

  @IsNumber()
  @Type(() => Number)
  resolutionWidth!: number;

  @IsNumber()
  @Type(() => Number)
  resolutionHeight!: number;
}

export const DeviceConnectionSubscribe = new WebSocketSpec({
  path: '/ws/devices/connection-subscribe',
  receiveMessage: DeviceConnectionSubscribeReceiveMessage,
});
