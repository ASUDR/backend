import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DormitoriesService } from './dormitory.service';
import { DormitoriesController } from './dormitory.controller';
import { Dormitory } from './entities/dormitory.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Dormitory])],
  controllers: [DormitoriesController],
  providers: [DormitoriesService],
})
export class DormitoriesModule {}
