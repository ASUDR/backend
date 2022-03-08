import { CommonEntity } from 'src/app/entities/common.entity';
import { Faculty } from 'src/faculties/entities/faculty.entity';
import { Lodger } from 'src/lodgers/entities/lodger.entity';
import {
  Entity, Column, ManyToOne, JoinColumn, OneToMany,
} from 'typeorm';

@Entity()
export class Group extends CommonEntity {
  @Column('varchar', { length: 64, unique: true })
    name: string;

  @ManyToOne(() => Faculty, (faculty) => faculty.groups, {
    eager: true,
  })
  @JoinColumn({ name: 'facultyId' })
    faculty: Faculty;

  @Column({ nullable: false })
    facultyId: number;

  @OneToMany(() => Lodger, (lodger) => lodger.dormitory)
    lodgers: Array<Lodger>;
}