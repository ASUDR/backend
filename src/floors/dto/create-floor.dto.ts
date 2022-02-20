import { IsDefined, IsString, MaxLength } from 'class-validator';

export class CreateFloorDto {
  @IsDefined()
  @IsString()
  @MaxLength(50)
  name: string;

  @IsDefined()
  @IsString()
  hostelId: string;
}
