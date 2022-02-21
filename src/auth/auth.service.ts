import { Injectable } from '@nestjs/common';
import { AdminsService } from 'src/admins/admins.service';

@Injectable()
export class AuthService {
  constructor(private adminsService: AdminsService) {}

  async validateUser(login: string, pass: string): Promise<any> {
    const user = await this.adminsService.findOne(login);
    if (user && user.password === pass) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }
}
