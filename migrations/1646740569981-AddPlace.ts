import { MigrationInterface, QueryRunner } from 'typeorm';

export class AddPlace1646740569981 implements MigrationInterface {
  name = 'AddPlace1646740569981';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
        CREATE TABLE "place" (
            "id" SERIAL NOT NULL,
            "createdAt" TIMESTAMP NOT NULL DEFAULT now(),
            "updatedAt" TIMESTAMP NOT NULL DEFAULT now(),
            "deletedAt" TIMESTAMP,
            "name" character varying(64) NOT NULL,
            "roomId" integer NOT NULL,
            CONSTRAINT "UQ_493d5e591af774a1587d363fb80" UNIQUE ("name"),
            CONSTRAINT "PK_96ab91d43aa89c5de1b59ee7cca" PRIMARY KEY ("id")
        )
    `);
    await queryRunner.query(`
        ALTER TABLE "place" ADD CONSTRAINT "FK_d3a15d9a574e2f73da2479d7d32"
            FOREIGN KEY ("roomId") REFERENCES "room"("id")
            ON DELETE NO ACTION ON UPDATE NO ACTION
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('ALTER TABLE "place" DROP CONSTRAINT "FK_d3a15d9a574e2f73da2479d7d32"');
    await queryRunner.query('DROP TABLE "place"');
  }
}
