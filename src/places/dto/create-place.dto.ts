import {
  IsNotEmpty, IsNumber, IsString, MaxLength,
} from 'class-validator';

export class CreatePlaceDto {
  @IsString()
  @IsNotEmpty()
  @MaxLength(50)
    name: string;

  @IsNumber()
    roomId: number;
}
