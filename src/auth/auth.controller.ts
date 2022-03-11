import {
  Controller,
  Post,
  UseGuards,
  Request,
  HttpStatus,
  UnauthorizedException,
} from '@nestjs/common';
import { ApiBody, ApiResponse, ApiTags } from '@nestjs/swagger';
import { AuthService } from './auth.service';
import { LoginInputDto } from './dto/login.input.dto';
import { LoginOutputDto } from './dto/login.output.dto';
import { LocalAuthGuard } from './guards/local-auth.guard';

@Controller('auth')
@ApiTags('auth')
@ApiResponse({
  status: HttpStatus.UNAUTHORIZED,
  description: 'Unauthorized',
})
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  @UseGuards(LocalAuthGuard)
  @ApiBody({ type: LoginInputDto })
  @ApiResponse({ status: HttpStatus.OK, type: LoginOutputDto })
  async login(@Request() req: any) {
    return this.authService.login(req.user);
  }
}
