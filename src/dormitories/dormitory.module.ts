import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HostelsService } from './dormitory.service';
import { HostelsController } from './dormitory.controller';
import { Dormitory } from './entities/dormitory.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Dormitory])],
  controllers: [HostelsController],
  providers: [HostelsService],
})
export class HostelsModule {}
