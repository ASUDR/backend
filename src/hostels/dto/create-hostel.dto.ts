import { IsNotEmpty, IsString, MaxLength } from 'class-validator';

export class CreateHostelDto {
  @IsString()
  @IsNotEmpty()
  @MaxLength(50)
  name: string;
}
