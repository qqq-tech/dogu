import { HttpModule } from '@nestjs/axios';
import { forwardRef, Module } from '@nestjs/common';
import { DeviceClientModule } from '../device-client/device-client.module';
import { DeviceJobModule } from '../device-job/device-job.module';
import { ActionProcessor } from './action.processor';
import { CommandProcessRegistry } from './command.process-registry';
import { DeviceJobStepProcessor } from './device-job-step.processor';

@Module({
  imports: [
    HttpModule.registerAsync({
      useFactory: () => ({}),
    }),
    forwardRef(() => DeviceJobModule),
    DeviceClientModule,
  ],
  providers: [ActionProcessor, CommandProcessRegistry, DeviceJobStepProcessor],
  exports: [ActionProcessor, CommandProcessRegistry, DeviceJobStepProcessor],
})
export class ProcessorModule {}
