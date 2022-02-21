import { IsString, MaxLength } from 'class-validator';

export class CreateRoomDto {
  @IsString()
  @MaxLength(50)
  name: string;

  @IsString()
  floorId: string;
}
