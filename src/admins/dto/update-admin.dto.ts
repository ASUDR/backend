import { PartialType } from '@nestjs/mapped-types';
import { IsString } from 'class-validator';
import { CreateAdminDto } from './create-admin.dto';

export class UpdateAdminDto extends PartialType(CreateAdminDto) {
  @IsString()
    login: string;
}
