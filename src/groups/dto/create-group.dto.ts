import {
  IsNotEmpty, IsNumber, IsString, MaxLength,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateGroupDto {
  @ApiProperty({
    maxLength: 64,
  })
  @IsString()
  @IsNotEmpty()
  @MaxLength(64)
    name: string;

  @ApiProperty()
  @IsNumber()
    facultyId: number;
}
