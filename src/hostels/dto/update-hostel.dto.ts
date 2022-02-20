import { PartialType } from '@nestjs/mapped-types';
import { IsDefined, IsInt } from 'class-validator';
import { CreateHostelDto } from './create-hostel.dto';

export class UpdateHostelDto extends PartialType(CreateHostelDto) {
  @IsDefined()
  @IsInt()
  id: number;
}
