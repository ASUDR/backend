import { CommonEntity } from 'src/app/entities/common.entity';
import { Faculty } from 'src/faculties/entities/faculty.entity';
import { Floor } from 'src/floors/entities/floor.entity';
import { Lodger } from 'src/lodgers/entities/lodger.entity';
import {
  Entity, Column, OneToMany, ManyToMany,
} from 'typeorm';

@Entity()
export class Dormitory extends CommonEntity {
  @Column('varchar', { length: 64, unique: true })
    name: string;

  @OneToMany(() => Floor, (floor) => floor.dormitory)
    floors: Array<Floor>;

  @ManyToMany(() => Faculty, (faculty) => faculty.dormitories)
    faculties: Array<Faculty>;

  @OneToMany(() => Lodger, (lodger) => lodger.dormitory)
    lodgers: Array<Lodger>;
}
