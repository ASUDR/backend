import { ApiProperty } from '@nestjs/swagger';
import { IsDefined, IsInt, IsPositive } from 'class-validator';

export class IdDto {
  @ApiProperty()
  @IsDefined()
  @IsInt()
  @IsPositive()
  id: number;
}
