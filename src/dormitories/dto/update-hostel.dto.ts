import { PartialType } from '@nestjs/swagger';
import { CreateHostelDto } from './create-hostel.dto';

export class UpdateHostelDto extends PartialType(CreateHostelDto) {}
