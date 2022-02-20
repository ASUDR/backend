import { IsDefined, IsString, MaxLength } from 'class-validator';

export class CreateGroupDto {
  @IsDefined()
  @IsString()
  @MaxLength(50)
  name: string;

  @IsDefined()
  @IsString()
  facultyId: string;
}
