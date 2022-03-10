import { PartialType } from '@nestjs/swagger';
import { CreateLodgerDto } from './create-lodger.dto';

export class UpdateLodgerDto extends PartialType(CreateLodgerDto) {}
