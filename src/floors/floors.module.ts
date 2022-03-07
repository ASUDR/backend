import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/prisma/prisma.module';
import { FloorsService } from './floors.service';
import { FloorsController } from './floors.controller';

@Module({
  imports: [PrismaModule],
  controllers: [FloorsController],
  providers: [FloorsService],
})
export class FloorsModule {}
