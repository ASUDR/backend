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
  @IsString()
  @IsNotEmpty()
  @MaxLength(50)
    firstName: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(50)
    lastName: string;

  @IsOptional()
  @IsString()
  @MaxLength(50)
    patronymic?: string;

  @IsOptional()
  @IsPhoneNumber()
    phone?: string;

  @IsOptional()
  @IsInt()
    contractId: number;

  @IsOptional()
  @IsDate()
    contractDate: Date;

  @IsOptional()
  @IsInt()
    hostelId: number;

  @IsOptional()
  @IsInt()
    placeId?: number;

  @IsOptional()
  @IsInt()
    groupId?: number;

  @IsOptional()
  @IsInt()
    countryId?: number;
}
