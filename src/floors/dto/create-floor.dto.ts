import { IsString, MaxLength } from 'class-validator';

export class CreateFloorDto {
  @IsString()
  @MaxLength(50)
  name: string;

  @IsString()
  hostelId: string;
}
