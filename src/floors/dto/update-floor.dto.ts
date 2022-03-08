import { PartialType } from '@nestjs/mapped-types';
import { CreateFloorDto } from './create-floor.dto';

export class UpdateFloorDto extends PartialType(CreateFloorDto) {}
