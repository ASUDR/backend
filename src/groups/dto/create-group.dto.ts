import { IsString, MaxLength } from 'class-validator';

export class CreateGroupDto {
  @IsString()
  @MaxLength(50)
  name: string;

  @IsString()
  facultyId: string;
}
