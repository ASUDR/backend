import { PartialType } from '@nestjs/mapped-types';
import { IsString } from 'class-validator';
import { CreateFacultyDto } from './create-faculty.dto';

export class UpdateFacultyDto extends PartialType(CreateFacultyDto) {
  @IsString()
  id: string;
}
