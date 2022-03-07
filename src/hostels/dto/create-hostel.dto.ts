import { IsNotEmpty, IsString, MaxLength } from 'class-validator';

export class CreateHostelDto {
  @IsString()
  @IsNotEmpty()
  @MaxLength(64)
    name: string;
}
