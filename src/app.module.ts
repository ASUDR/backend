import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { HostelsModule } from './hostels/hostels.module';
import { FloorsModule } from './floors/floors.module';
import { RoomsModule } from './rooms/rooms.module';

@Module({
  imports: [PrismaModule, HostelsModule, FloorsModule, RoomsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
