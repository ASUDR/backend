import { Module } from '@nestjs/common';
import { FloorsService } from './floors.service';
import { FloorsController } from './floors.controller';

@Module({
  controllers: [FloorsController],
  providers: [FloorsService],
})
export class FloorsModule {}
