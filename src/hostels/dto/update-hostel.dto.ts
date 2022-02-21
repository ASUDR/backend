import { PartialType } from '@nestjs/mapped-types';
import { IsString } from 'class-validator';
import { CreateHostelDto } from './create-hostel.dto';

export class UpdateHostelDto extends PartialType(CreateHostelDto) {
  @IsString()
  id: string;
}
