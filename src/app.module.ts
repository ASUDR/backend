import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HostelsModule } from './hostels/hostels.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [HostelsModule, PrismaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
