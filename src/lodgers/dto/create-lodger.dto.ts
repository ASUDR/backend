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
    maxLength: 50,
  })
  @IsString()
  @IsNotEmpty()
  @MaxLength(50)
    firstName: string;

  @ApiProperty({
    maxLength: 50,
  })
  @IsString()
  @IsNotEmpty()
  @MaxLength(50)
    lastName: string;

  @ApiPropertyOptional({
    maxLength: 50,
  })
  @IsOptional()
  @IsString()
  @MaxLength(50)
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
    hostelId: number;

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
