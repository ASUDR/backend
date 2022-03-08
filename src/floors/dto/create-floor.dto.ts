import {
  IsNotEmpty, IsNumber, IsString, MaxLength,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateFloorDto {
  @ApiProperty({
    maxLength: 50,
  })
  @IsString()
  @IsNotEmpty()
  @MaxLength(50)
    name: string;

  @ApiProperty()
  @IsNumber()
    hostelId: number;
}
