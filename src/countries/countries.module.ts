import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/prisma/prisma.module';
import { CountriesService } from './countries.service';
import { CountriesController } from './countries.controller';

@Module({
  imports: [PrismaModule],
  controllers: [CountriesController],
  providers: [CountriesService],
})
export class CountriesModule {}
