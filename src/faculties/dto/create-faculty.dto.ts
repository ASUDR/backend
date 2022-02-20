import { IsDefined, IsString, MaxLength } from 'class-validator';

export class CreateFacultyDto {
  @IsDefined()
  @IsString()
  @MaxLength(50)
  name: string;
}
