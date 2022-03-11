import { IsDefined, IsInt, IsPositive } from 'class-validator';

export class IdDto {
  @IsDefined()
  @IsInt()
  @IsPositive()
  id: number;
}
