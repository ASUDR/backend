import { IsNotEmpty, IsString, MaxLength } from 'class-validator';

export class CreateGroupDto {
  @IsString()
  @IsNotEmpty()
  @MaxLength(50)
    name: string;

  @IsString()
    facultyId: string;
}
