import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import {
  IsInt,
  IsOptional,
  IsPhoneNumber,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';

export class CreateLodgerDto {
  @ApiProperty({
    maxLength: 64,
  })
  @IsString()
  @MaxLength(64)
    login: string;

  @ApiProperty({
    minLength: 8,
    maxLength: 128,
  })
  @IsString()
  @MinLength(8)
  @MaxLength(128)
    password: string;

  @ApiProperty()
  @IsInt()
    contractId: number;

  @ApiPropertyOptional()
  @IsOptional()
  @IsPhoneNumber()
    phone?: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsInt()
    groupId?: number;

  @ApiPropertyOptional()
  @IsOptional()
  @IsInt()
    countryId?: number;
}
