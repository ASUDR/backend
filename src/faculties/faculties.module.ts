import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/prisma/prisma.module';
import { FacultiesService } from './faculties.service';
import { FacultiesController } from './faculties.controller';

@Module({
  imports: [PrismaModule],
  controllers: [FacultiesController],
  providers: [FacultiesService],
})
export class FacultiesModule {}
