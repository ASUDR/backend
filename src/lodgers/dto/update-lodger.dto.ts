import { PartialType } from '@nestjs/mapped-types';
import { IsString } from 'class-validator';
import { CreateLodgerDto } from './create-lodger.dto';

export class UpdateLodgerDto extends PartialType(CreateLodgerDto) {
  @IsString()
  id: string;
}
