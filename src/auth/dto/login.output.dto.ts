import { ApiProperty } from '@nestjs/swagger';

export class LoginOutputDto {
  @ApiProperty({ description: 'token for bearer auth' })
  access_token: string;
}
