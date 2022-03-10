import { CommonEntity } from 'src/app/entities/common.entity';
import { Lodger } from 'src/lodgers/entities/lodger.entity';
import { Entity, Column, OneToMany } from 'typeorm';

@Entity()
export class Country extends CommonEntity {
  @Column('varchar', { length: 64, unique: true })
    name: string;

  @OneToMany(() => Lodger, (lodger) => lodger.dormitory)
    lodgers: Array<Lodger>;
}
