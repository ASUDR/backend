import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/prisma/prisma.module';
import { LodgersService } from './lodgers.service';
import { LodgersController } from './lodgers.controller';

@Module({
  imports: [PrismaModule],
  controllers: [LodgersController],
  providers: [LodgersService],
})
export class LodgersModule {}
