import { IsString, MaxLength } from 'class-validator';

export class CreatePlaceDto {
  @IsString()
  @MaxLength(50)
  name: string;

  @IsString()
  roomId: string;
}
