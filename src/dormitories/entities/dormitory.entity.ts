import { CommonEntity } from 'src/app/entities/common.entity';
import { Floor } from 'src/floors/entities/floor.entity';
import { Entity, Column, OneToMany } from 'typeorm';

@Entity()
export class Dormitory extends CommonEntity {
  @Column('varchar', { length: 64, unique: true })
    name: string;

  @OneToMany(() => Floor, (floor) => floor.hostel)
    floors: Floor[];
}
