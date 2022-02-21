import { PartialType } from '@nestjs/mapped-types';
import { IsString } from 'class-validator';
import { CreateGroupDto } from './create-group.dto';

export class UpdateGroupDto extends PartialType(CreateGroupDto) {
  @IsString()
  id: string;
}
