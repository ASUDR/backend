import { PartialType } from '@nestjs/swagger';
import { CreateDormitoryDto } from './create-dormitory.dto';

export class UpdateDormitoryDto extends PartialType(CreateDormitoryDto) {}
