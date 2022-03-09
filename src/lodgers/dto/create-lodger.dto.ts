import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import {
  IsDate,
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsPhoneNumber,
  IsString,
  MaxLength,
} from 'class-validator';

export class CreateLodgerDto {
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

  @ApiPropertyOptional()
  @IsOptional()
  @IsPhoneNumber()
    phone?: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsInt()
    contractId?: number;

  @ApiPropertyOptional()
  @IsOptional()
  @IsDate()
    contractDate?: Date;

  @ApiProperty()
  @IsOptional()
  @IsInt()
    dormitoryId: number;

  @ApiPropertyOptional()
  @IsOptional()
  @IsInt()
    placeId?: number;

  @ApiPropertyOptional()
  @IsOptional()
  @IsInt()
    groupId?: number;

  @ApiPropertyOptional()
  @IsOptional()
  @IsInt()
    countryId?: number;
}
