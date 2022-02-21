import { Controller, Post, UseGuards, Request } from '@nestjs/common';
import { Request as IRequest } from 'express';
import { AppService } from './app.service';
import { LocalAuthGuard } from './auth/local-auth.guard';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @UseGuards(LocalAuthGuard)
  @Post('auth/login')
  async login(@Request() req: IRequest) {
    return req.user;
  }
}
