import {
  Controller, Post, UseGuards, Request,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { AuthService } from 'src/auth/auth.service';
import { LocalAuthGuard } from 'src/auth/guards/local-auth.guard';

@Controller()
export class AppController {
  // constructor(private readonly authService: AuthService) {}

  // @ApiTags('auth')
  // @UseGuards(LocalAuthGuard)
  // @Post('auth/login')
  // async login(@Request() req: any) {
  //   return this.authService.login(req.user);
  // }
}
