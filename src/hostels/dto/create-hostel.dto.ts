import { IsString } from 'class-validator';

export class CreateHostelDto {
  @IsString()
  name: string;
}
