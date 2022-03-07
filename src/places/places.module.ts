import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/prisma/prisma.module';
import { PlacesService } from './places.service';
import { PlacesController } from './places.controller';

@Module({
  imports: [PrismaModule],
  controllers: [PlacesController],
  providers: [PlacesService],
})
export class PlacesModule {}
