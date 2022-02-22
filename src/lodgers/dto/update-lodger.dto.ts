import { ApiProperty, PartialType } from '@nestjs/swagger';
import { IsString } from 'class-validator';
import { CreateLodgerDto } from './create-lodger.dto';

export class UpdateLodgerDto extends PartialType(CreateLodgerDto) {
  @ApiProperty()
  @IsString()
  id: string;
}
