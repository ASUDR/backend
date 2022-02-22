import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsOptional, IsString, MaxLength } from 'class-validator';

export class CreateAdminDto {
  @ApiProperty({
    maxLength: 50,
  })
  @IsString()
  @IsNotEmpty()
  @MaxLength(50)
  firstName: string;

  @ApiProperty({
    maxLength: 50,
  })
  @IsString()
  @IsNotEmpty()
  @MaxLength(50)
  lastName: string;

  @ApiProperty({
    maxLength: 50,
  })
  @IsOptional()
  @IsString()
  @MaxLength(50)
  patronymic?: string;

  @ApiProperty()
  @IsString()
  roleId: string;

  @ApiProperty()
  @IsString({ each: true })
  facultiesIds: Array<string>;
}
