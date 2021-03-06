import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class LoginInputDto {
  @ApiProperty({
    maxLength: 64,
  })
  @IsString()
  @IsNotEmpty()
  login: string;

  @ApiProperty({
    maxLength: 128,
  })
  @IsString()
  @IsNotEmpty()
  password: string;
}
