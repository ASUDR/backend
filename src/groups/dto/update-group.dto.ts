import { PartialType } from '@nestjs/mapped-types';
import { IsDefined, IsString } from 'class-validator';
import { CreateGroupDto } from './create-group.dto';

export class UpdateGroupDto extends PartialType(CreateGroupDto) {
  @IsDefined()
  @IsString()
  id: string;
}
