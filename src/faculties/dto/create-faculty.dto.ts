import { IsString, MaxLength } from 'class-validator';

export class CreateFacultyDto {
  @IsString()
  @MaxLength(50)
  name: string;
}
