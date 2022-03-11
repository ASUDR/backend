import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FacultiesService } from './faculties.service';
import { FacultiesController } from './faculties.controller';
import { Faculty } from './entities/faculty.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Faculty])],
  controllers: [FacultiesController],
  providers: [FacultiesService],
  exports: [FacultiesService],
})
export class FacultiesModule {}
