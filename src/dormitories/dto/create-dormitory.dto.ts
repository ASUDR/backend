import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, MaxLength } from 'class-validator';

export class CreateDormitoryDto {
  @ApiProperty({
    maxLength: 64,
  })
  @IsString()
  @IsNotEmpty()
  @MaxLength(64)
    name: string;
}
