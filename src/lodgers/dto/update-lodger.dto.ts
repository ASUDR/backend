import { PartialType } from '@nestjs/mapped-types';
import { CreateLodgerDto } from './create-lodger.dto';

export class UpdateLodgerDto extends PartialType(CreateLodgerDto) {}
