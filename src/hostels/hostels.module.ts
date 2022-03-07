import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HostelsService } from './hostels.service';
import { HostelsController } from './hostels.controller';
import { Hostel } from './entities/hostel.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Hostel])],
  controllers: [HostelsController],
  providers: [HostelsService],
})
export class HostelsModule {}
