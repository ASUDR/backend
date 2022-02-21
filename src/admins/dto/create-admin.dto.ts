import { IsNotEmpty, IsOptional, IsString, MaxLength } from 'class-validator';

export class CreateAdminDto {
  @IsString()
  @IsNotEmpty()
  @MaxLength(50)
  firstName: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(50)
  lastName: string;

  @IsOptional()
  @IsString()
  @MaxLength(50)
  patronymic?: string;

  @IsString()
  roleId: string;

  @IsString({ each: true })
  facultiesIds: Array<string>;
}
