import { ApiProperty, PartialType } from '@nestjs/swagger';
import { IsString } from 'class-validator';
import { CreateHostelDto } from './create-hostel.dto';

export class UpdateHostelDto extends PartialType(CreateHostelDto) {
  @ApiProperty()
  @IsString()
  id: string;
}
