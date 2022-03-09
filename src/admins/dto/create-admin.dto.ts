import {
  IsNotEmpty, IsOptional, IsString, MaxLength,
} from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreateAdminDto {
  @ApiProperty({
    maxLength: 64,
  })
  @IsString()
  @MaxLength(64)
    login: string;

  @ApiProperty({
    maxLength: 128,
  })
  @IsString()
  @MaxLength(128)
    password: string;

  @ApiProperty({
    maxLength: 64,
  })
  @IsString()
  @IsNotEmpty()
  @MaxLength(64)
    firstName: string;

  @ApiProperty({
    maxLength: 64,
  })
  @IsString()
  @IsNotEmpty()
  @MaxLength(64)
    lastName: string;

  @ApiPropertyOptional({
    maxLength: 64,
  })
  @IsOptional()
  @IsString()
  @MaxLength(64)
    patronymic?: string;

  @ApiProperty()
  @IsString()
    roleId: number;

  @ApiProperty()
  @IsString({ each: true })
    facultiesIds: Array<number>;
}
