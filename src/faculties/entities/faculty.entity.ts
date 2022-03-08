import { CommonEntity } from 'src/app/entities/common.entity';
import { Dormitory } from 'src/dormitories/entities/dormitory.entity';
import { Entity, Column, ManyToMany } from 'typeorm';

@Entity()
export class Faculty extends CommonEntity {
  @Column('varchar', { length: 64, unique: true })
    name: string;

  @ManyToMany(() => Dormitory, (dorm) => dorm.faculties)
    dormitories: Array<Dormitory>;
}
