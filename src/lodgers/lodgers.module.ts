import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LodgersService } from './lodgers.service';
import { LodgersController } from './lodgers.controller';
import { Lodger } from './entities/lodger.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Lodger])],
  controllers: [LodgersController],
  providers: [LodgersService],
})
export class LodgersModule {}
