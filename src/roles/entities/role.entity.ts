import { Admin } from 'src/admins/entities/admin.entity';
import { CommonEntity } from 'src/app/entities/common.entity';
import { Entity, Column, OneToMany } from 'typeorm';

@Entity()
export class Role extends CommonEntity {
  @Column('varchar', { length: 64, unique: true })
    name: string;

  @OneToMany(() => Admin, (admin) => admin.role)
    admins: Array<Admin>;
}
