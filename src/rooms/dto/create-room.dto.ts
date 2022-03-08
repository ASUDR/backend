import {
  IsNotEmpty, IsNumber, IsString, MaxLength,
} from 'class-validator';

export class CreateRoomDto {
  @IsString()
  @IsNotEmpty()
  @MaxLength(50)
    name: string;

  @IsNumber()
    floorId: number;
}
