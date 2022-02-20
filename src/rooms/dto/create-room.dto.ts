import { IsDefined, IsString, MaxLength } from 'class-validator';

export class CreateRoomDto {
  @IsDefined()
  @IsString()
  @MaxLength(50)
  name: string;

  @IsDefined()
  @IsString()
  floorId: string;
}
