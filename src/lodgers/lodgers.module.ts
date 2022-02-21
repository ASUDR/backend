import { Module } from '@nestjs/common';
import { LodgersService } from './lodgers.service';
import { LodgersController } from './lodgers.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [LodgersController],
  providers: [LodgersService],
})
export class LodgersModule {}
