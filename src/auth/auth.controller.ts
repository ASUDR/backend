import {
  Controller, Post, UseGuards, Request, HttpStatus,
} from '@nestjs/common';
import { ApiBody, ApiResponse, ApiTags } from '@nestjs/swagger';
import { AuthService } from './auth.service';
import { LoginInputDto } from './dto/login.input.dto';
import { LoginOutputDto } from './dto/login.output.dto';
import { LocalAuthGuard } from './guards/local-auth.guard';

@ApiTags('auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  @UseGuards(LocalAuthGuard)
  @ApiTags('auth')
  @ApiBody({ type: LoginInputDto })
  @ApiResponse({ status: HttpStatus.OK, type: LoginOutputDto })
  @ApiResponse({ status: HttpStatus.UNAUTHORIZED })
  async login(@Request() req: any) {
    return this.authService.login(req.user);
  }
}
