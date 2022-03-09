import { CommonEntity } from 'src/app/entities/common.entity';
import { Entity, Column } from 'typeorm';

@Entity()
export class Role extends CommonEntity {
  @Column('varchar', { length: 64, unique: true })
    name: string;
}
