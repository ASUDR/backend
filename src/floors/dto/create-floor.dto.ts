import {
  IsNotEmpty, IsNumber, IsString, MaxLength,
} from 'class-validator';

export class CreateFloorDto {
  @IsString()
  @IsNotEmpty()
  @MaxLength(50)
    name: string;

  @IsNumber()
    hostelId: number;
}
