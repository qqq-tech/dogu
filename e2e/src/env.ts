import 'reflect-metadata';

import { DoguRunType, NodeEnvType } from '@dogu-private/env-tools';
import { Type } from 'class-transformer';
import { IsIn, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class E2eEnv {
  @IsIn(NodeEnvType)
  NODE_ENV!: NodeEnvType;

  @IsIn(DoguRunType)
  DOGU_RUN_TYPE!: DoguRunType;

  @IsNumber()
  @Type(() => Number)
  CONSOLE_WEB_FRONT_PORT!: number;

  @IsNotEmpty()
  @IsString()
  DOGU_CONSOLE_WEB_SERVER_PORT!: string;

  @IsNotEmpty()
  @IsString()
  DOGU_DEVICE_SERVER_PORT!: string;
}