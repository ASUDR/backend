import { PartialType } from '@nestjs/mapped-types';
import { IsString } from 'class-validator';
import { CreateFloorDto } from './create-floor.dto';

export class UpdateFloorDto extends PartialType(CreateFloorDto) {
  @IsString()
    id: string;
}
