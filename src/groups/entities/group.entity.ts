import { ApiProperty } from '@nestjs/swagger';
import { CommonEntity } from 'src/app/entities/common.entity';
import { Faculty } from 'src/faculties/entities/faculty.entity';
import { Lodger } from 'src/lodgers/entities/lodger.entity';
import { Entity, Column, ManyToOne, JoinColumn, OneToMany } from 'typeorm';

@Entity()
export class Group extends CommonEntity {
  @ApiProperty()
  @Column('varchar', { length: 64, unique: true })
  name: string;

  @ApiProperty({ type: () => Faculty })
  @ManyToOne(() => Faculty, (faculty) => faculty.groups, {
    eager: true,
  })
  @JoinColumn({ name: 'facultyId' })
  faculty: Faculty;

  @ApiProperty()
  @Column({ nullable: false })
  facultyId: number;

  @ApiProperty({ type: () => [Lodger] })
  @OneToMany(() => Lodger, (lodger) => lodger.dormitory)
  lodgers: Array<Lodger>;
}
