import { IsNotEmpty, IsString, MaxLength } from 'class-validator';

export class CreateCountryDto {
  @IsString()
  @IsNotEmpty()
  @MaxLength(50)
  name: string;
}
