import { PartialType } from '@nestjs/mapped-types';
import { IsDefined, IsString } from 'class-validator';
import { CreateCountryDto } from './create-country.dto';

export class UpdateCountryDto extends PartialType(CreateCountryDto) {
  @IsDefined()
  @IsString()
  id: string;
}
