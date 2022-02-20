import { PartialType } from '@nestjs/mapped-types';
import { IsDefined, IsString } from 'class-validator';
import { CreateFloorDto } from './create-floor.dto';

export class UpdateFloorDto extends PartialType(CreateFloorDto) {
  @IsDefined()
  @IsString()
  id: string;
}
