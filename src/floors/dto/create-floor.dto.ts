import {
  IsNotEmpty, IsNumber, IsString, MaxLength,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateFloorDto {
  @ApiProperty({
    maxLength: 64,
  })
  @IsString()
  @IsNotEmpty()
  @MaxLength(64)
    name: string;

  @ApiProperty()
  @IsNumber()
    dormitoryId: number;
}
