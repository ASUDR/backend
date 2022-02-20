import { IsDefined, IsString, MaxLength } from 'class-validator';

export class CreatePlaceDto {
  @IsDefined()
  @IsString()
  @MaxLength(50)
  name: string;

  @IsDefined()
  @IsString()
  roomId: string;
}
