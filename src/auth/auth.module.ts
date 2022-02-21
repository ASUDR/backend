import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { AdminsModule } from 'src/admins/admins.module';
import { AuthService } from './auth.service';
import { LocalStrategy } from './local.strategy';

@Module({
  imports: [AdminsModule, PassportModule],
  providers: [AuthService, LocalStrategy],
})
export class AuthModule {}
