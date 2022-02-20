import { PartialType } from '@nestjs/mapped-types';
import { IsDefined, IsInt } from 'class-validator';
import { CreateFloorDto } from './create-floor.dto';

export class UpdateFloorDto extends PartialType(CreateFloorDto) {
  @IsDefined()
  @IsInt()
  id: number;
}
