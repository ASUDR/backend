import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FloorsService } from './floors.service';
import { FloorsController } from './floors.controller';
import { Floor } from './entities/floor.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Floor])],
  controllers: [FloorsController],
  providers: [FloorsService],
})
export class FloorsModule {}
