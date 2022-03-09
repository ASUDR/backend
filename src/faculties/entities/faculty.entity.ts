import { Admin } from 'src/admins/dto/entities/admin.entity';
import { CommonEntity } from 'src/app/entities/common.entity';
import { Dormitory } from 'src/dormitories/entities/dormitory.entity';
import { Group } from 'src/groups/entities/group.entity';
import {
  Entity, Column, ManyToMany, OneToMany,
} from 'typeorm';

@Entity()
export class Faculty extends CommonEntity {
  @Column('varchar', { length: 64, unique: true })
    name: string;

  @ManyToMany(() => Dormitory, (dorm) => dorm.faculties)
    dormitories: Array<Dormitory>;

  @OneToMany(() => Group, (group) => group.faculty)
    groups: Array<Group>;

  @ManyToMany(() => Admin, (admin) => admin.faculties)
    admins: Array<Admin>;
}
