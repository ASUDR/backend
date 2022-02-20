import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HostelsModule } from './hostels/hostels.module';

@Module({
  imports: [HostelsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
