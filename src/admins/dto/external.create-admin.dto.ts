import { OmitType } from '@nestjs/swagger';
import { CreateAdminDto } from './create-admin.dto';

export class ExternalCreateAdminDto extends OmitType(CreateAdminDto, [
  'roleId',
]) {}
