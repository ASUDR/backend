import { MigrationInterface, QueryRunner } from 'typeorm';

export class AddRoom1646739133843 implements MigrationInterface {
  name = 'AddRoom1646739133843';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
        CREATE TABLE "room" (
            "id" SERIAL NOT NULL,
            "createdAt" TIMESTAMP NOT NULL DEFAULT now(),
            "updatedAt" TIMESTAMP NOT NULL DEFAULT now(),
            "deletedAt" TIMESTAMP,
            "name" character varying(64) NOT NULL,
            "floorId" integer,
            CONSTRAINT "UQ_535c742a3606d2e3122f441b26c" UNIQUE ("name"),
            CONSTRAINT "PK_c6d46db005d623e691b2fbcba23" PRIMARY KEY ("id")
        )
    `);
    await queryRunner.query(`
        ALTER TABLE "room" ADD CONSTRAINT "FK_10cf3e2165977f1e547d5c25512"
            FOREIGN KEY ("floorId") REFERENCES "floor"("id")
            ON DELETE NO ACTION ON UPDATE NO ACTION
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('ALTER TABLE "room" DROP CONSTRAINT "FK_10cf3e2165977f1e547d5c25512"');
    await queryRunner.query('DROP TABLE "room"');
  }
}
