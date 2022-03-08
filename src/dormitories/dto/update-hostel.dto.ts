import { PartialType } from '@nestjs/mapped-types';
import { CreateHostelDto } from './create-hostel.dto';

export class UpdateHostelDto extends PartialType(CreateHostelDto) {}
