import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AdminsService } from './admins.service';
import { AdminsController } from './admins.controller';
import { Admin } from './entities/admin.entity';
import { ExternalAdminsController } from './external.admins.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Admin])],
  controllers: [AdminsController, ExternalAdminsController],
  providers: [AdminsService],
  exports: [AdminsService],
})
export class AdminsModule {}
