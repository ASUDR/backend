import { IsNotEmpty, IsString, MaxLength } from 'class-validator';

export class CreateFloorDto {
  @IsString()
  @IsNotEmpty()
  @MaxLength(50)
  name: string;

  @IsString()
  hostelId: string;
}
