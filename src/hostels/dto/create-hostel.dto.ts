import { IsDefined, IsString, MaxLength } from 'class-validator';

export class CreateHostelDto {
  @IsDefined()
  @IsString()
  @MaxLength(50)
  name: string;
}
