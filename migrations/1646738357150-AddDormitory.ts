import { MigrationInterface, QueryRunner } from 'typeorm';

export class AddDormitory1646738357150 implements MigrationInterface {
  name = 'AddDormitory1646738357150';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`CREATE TABLE "dormitory" (
        "id" SERIAL NOT NULL,
        "createdAt" TIMESTAMP NOT NULL DEFAULT now(),
        "updatedAt" TIMESTAMP NOT NULL DEFAULT now(),
        "deletedAt" TIMESTAMP,
        "name" character varying(64) NOT NULL,
        CONSTRAINT "UQ_59908be89337ea9c81d97da39e0" UNIQUE ("name"),
        CONSTRAINT "PK_17483b11457c23cad87f30ff31c" PRIMARY KEY ("id")
        )
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('DROP TABLE "dormitory"');
  }
}
