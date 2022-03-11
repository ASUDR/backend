import {
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsPositive,
  IsString,
  MaxLength,
  MinLength,
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
  @MinLength(8)
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
  @IsInt()
  @IsPositive()
  roleId: number;

  @ApiProperty()
  @IsInt({ each: true })
  @IsPositive({ each: true })
  facultiesIds: Array<number>;
}
