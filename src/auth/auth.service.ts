import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { AdminsService } from 'src/admins/admins.service';
import { Admin } from 'src/admins/entities/admin.entity';

@Injectable()
export class AuthService {
  constructor(
    private adminsService: AdminsService,
    private jwtService: JwtService,
  ) {}

  async validateUser(login: string, pass: string): Promise<any> {
    const user = await this.adminsService.findOne({ login });
    console.log('AuthService.validateUser, user', user);
    if (user && user.password === pass) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  login(user: Admin) {
    const payload = { username: user.login, sub: user.id };
    console.log('payload', payload);
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
