import { IsNotEmpty, IsString, MaxLength } from 'class-validator';

export class CreateFacultyDto {
  @IsString()
  @IsNotEmpty()
  @MaxLength(50)
  name: string;
}
