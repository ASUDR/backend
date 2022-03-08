import { MigrationInterface, QueryRunner } from 'typeorm';

export class AddHostel1646692263305 implements MigrationInterface {
  name = 'AddHostel1646692263305';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
        CREATE TABLE "hostel" (
            "id" SERIAL NOT NULL,
            "createdAt" TIMESTAMP NOT NULL DEFAULT now(),
            "updatedAt" TIMESTAMP NOT NULL DEFAULT now(),
            "deletedAt" TIMESTAMP,
            "name" character varying(64) NOT NULL,
            CONSTRAINT "UQ_dc1bc949d5b99e3858ccb40943e" UNIQUE ("name"),
            CONSTRAINT "PK_52c522a0fdb9e974bff8ceb35e4" PRIMARY KEY ("id")
        )
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('DROP TABLE "hostel"');
  }
}
