import { PartialType } from '@nestjs/mapped-types';
import { IsString } from 'class-validator';
import { CreatePlaceDto } from './create-place.dto';

export class UpdatePlaceDto extends PartialType(CreatePlaceDto) {
  @IsString()
  id: string;
}
