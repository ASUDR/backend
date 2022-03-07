import { IsNotEmpty, IsString, MaxLength } from 'class-validator';

export class CreateRoomDto {
  @IsString()
  @IsNotEmpty()
  @MaxLength(50)
    name: string;

  @IsString()
    floorId: string;
}
