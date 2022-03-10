import { CommonEntity } from 'src/app/entities/common.entity';
import { Country } from 'src/countries/entities/country.entity';
import { Dormitory } from 'src/dormitories/entities/dormitory.entity';
import { Group } from 'src/groups/entities/group.entity';
import { Place } from 'src/places/entities/place.entity';
import {
  Entity, Column, ManyToOne, JoinColumn,
} from 'typeorm';

@Entity()
export class Lodger extends CommonEntity {
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

  @Column('varchar', { length: 11, nullable: true })
    phone?: string;

  @Column()
    contractId: number;

  @Column({ nullable: true })
    contractDate?: Date;

  @ManyToOne(() => Dormitory, (dorm) => dorm.lodgers, {
    eager: true,
  })
  @JoinColumn({ name: 'dormitoryId' })
    dormitory: Dormitory;

  @Column({ nullable: true })
    dormitoryId?: number;

  @ManyToOne(() => Place, (place) => place.lodgers, {
    eager: true,
  })
  @JoinColumn({ name: 'placeId' })
    place: Place;

  @Column({ nullable: true })
    placeId?: number;

  @ManyToOne(() => Group, (group) => group.lodgers, {
    eager: true,
  })
  @JoinColumn({ name: 'groupId' })
    group: Place;

  @Column({ nullable: true })
    groupId?: number;

  @ManyToOne(() => Country, (country) => country.lodgers, {
    eager: true,
  })
  @JoinColumn({ name: 'countryId' })
    country: Place;

  @Column({ nullable: true })
    countryId?: number;
}
