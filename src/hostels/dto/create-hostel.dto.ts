import { IsString, MaxLength } from 'class-validator';

export class CreateHostelDto {
  @IsString()
  @MaxLength(50)
  name: string;
}
