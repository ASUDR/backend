import { ApiProperty } from '@nestjs/swagger';
import {
  BaseEntity,
  CreateDateColumn,
  DeleteDateColumn,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

export class CommonEntity extends BaseEntity {
  @ApiProperty({ description: 'primary key' })
  @PrimaryGeneratedColumn()
    id: number;

  @ApiProperty({ description: 'created date' })
  @CreateDateColumn()
    createdAt: Date;

  @ApiProperty({ description: 'updated date' })
  @UpdateDateColumn()
    updatedAt: Date;

  @ApiProperty({ description: 'deleted date' })
  @DeleteDateColumn()
    deletedAt: Date;
}
