import { ApiProperty } from '@nestjs/swagger';
import { Admin } from 'src/admins/entities/admin.entity';
import { CommonEntity } from 'src/app/entities/common.entity';
import { Dormitory } from 'src/dormitories/entities/dormitory.entity';
import { Group } from 'src/groups/entities/group.entity';
import { Entity, Column, ManyToMany, OneToMany } from 'typeorm';

@Entity()
export class Faculty extends CommonEntity {
  @ApiProperty()
  @Column('varchar', { length: 64, unique: true })
  name: string;

  @ApiProperty({ type: () => [Group] })
  @OneToMany(() => Group, (group) => group.faculty)
  groups: Array<Group>;

  @ApiProperty({ type: () => [Dormitory] })
  @ManyToMany(() => Dormitory, (dorm) => dorm.faculties)
  dormitories: Array<Dormitory>;

  @ApiProperty({ type: () => [Admin] })
  @ManyToMany(() => Admin, (admin) => admin.faculties)
  admins: Array<Admin>;
}
