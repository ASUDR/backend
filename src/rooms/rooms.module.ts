import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/prisma/prisma.module';
import { RoomsService } from './rooms.service';
import { RoomsController } from './rooms.controller';

@Module({
  imports: [PrismaModule],
  controllers: [RoomsController],
  providers: [RoomsService],
})
export class RoomsModule {}
