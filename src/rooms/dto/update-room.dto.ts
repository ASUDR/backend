import { PartialType } from '@nestjs/mapped-types';
import { IsDefined, IsString } from 'class-validator';
import { CreateRoomDto } from './create-room.dto';

export class UpdateRoomDto extends PartialType(CreateRoomDto) {
  @IsDefined()
  @IsString()
  id: string;
}
