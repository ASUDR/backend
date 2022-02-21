import { IsNotEmpty, IsString, MaxLength } from 'class-validator';

export class CreatePlaceDto {
  @IsString()
  @IsNotEmpty()
  @MaxLength(50)
  name: string;

  @IsString()
  roomId: string;
}
