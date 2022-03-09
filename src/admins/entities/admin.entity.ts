import { CommonEntity } from 'src/app/entities/common.entity';
import { Faculty } from 'src/faculties/entities/faculty.entity';
import { Role } from 'src/roles/entities/role.entity';
import {
  Entity, Column, ManyToOne, JoinColumn, ManyToMany, JoinTable,
} from 'typeorm';

@Entity()
export class Admin extends CommonEntity {
  @Column('varchar', { length: 64, unique: true })
    login: string;

  @Column('varchar', { length: 128 })
    password: string;

  @Column('varchar', { length: 64 })
    lastName: string;

  @Column('varchar', { length: 64 })
    firstName: string;

  @Column('varchar', { length: 64, nullable: true })
    patronymic?: string;

  @ManyToOne(() => Role, (role) => role.admins, {
    eager: true,
  })
  @JoinColumn({ name: 'roleId' })
    role: Role;

  @Column({ nullable: false })
    roleId: number;

  @ManyToMany(() => Faculty, (faculty) => faculty.admins, {
    eager: true,
  })
  @JoinTable({ name: 'admins_to_faculties' })
    faculties: Array<Faculty>;
}
