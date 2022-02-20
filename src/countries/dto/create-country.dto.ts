import { IsDefined, IsString, MaxLength } from 'class-validator';

export class CreateCountryDto {
  @IsDefined()
  @IsString()
  @MaxLength(50)
  name: string;
}
