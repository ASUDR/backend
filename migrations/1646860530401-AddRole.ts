import { MigrationInterface, QueryRunner } from 'typeorm';

export class AddRole1646860530401 implements MigrationInterface {
  name = 'AddRole1646860530401';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
        CREATE TABLE "role" (
            "id" SERIAL NOT NULL,
            "createdAt" TIMESTAMP NOT NULL DEFAULT now(),
            "updatedAt" TIMESTAMP NOT NULL DEFAULT now(),
            "deletedAt" TIMESTAMP,
            "name" character varying(64) NOT NULL,
            CONSTRAINT "UQ_ae4578dcaed5adff96595e61660" UNIQUE ("name"),
            CONSTRAINT "PK_b36bcfe02fc8de3c57a8b2391c2" PRIMARY KEY ("id")
        )
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('DROP TABLE "role"');
  }
}
