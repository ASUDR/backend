import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/prisma/prisma.module';
import { AdminsService } from './admins.service';
import { AdminsController } from './admins.controller';

@Module({
  imports: [PrismaModule],
  controllers: [AdminsController],
  providers: [AdminsService],
  exports: [AdminsService],
})
export class AdminsModule {}
