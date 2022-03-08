import {
  IsNotEmpty, IsNumber, IsString, MaxLength,
} from 'class-validator';

export class CreateGroupDto {
  @IsString()
  @IsNotEmpty()
  @MaxLength(50)
    name: string;

  @IsNumber()
    facultyId: number;
}
