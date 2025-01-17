import { Module } from '@nestjs/common';
import { SeleniumService } from './selenium.service';

@Module({
  providers: [SeleniumService],
  exports: [SeleniumService],
})
export class SeleniumModule {}
