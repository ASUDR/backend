import { PartialType } from '@nestjs/mapped-types';
import { IsDefined, IsString } from 'class-validator';
import { CreateHostelDto } from './create-hostel.dto';

export class UpdateHostelDto extends PartialType(CreateHostelDto) {
  @IsDefined()
  @IsString()
  id: string;
}
