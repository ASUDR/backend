import { Module } from '@nestjs/common';
import { HostelsService } from './hostels.service';

@Module({
  providers: [HostelsService]
})
export class HostelsModule {}
