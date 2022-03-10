import { MigrationInterface, QueryRunner } from 'typeorm';

export class AddCountry1646766745003 implements MigrationInterface {
  name = 'AddCountry1646766745003';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
        ALTER TABLE "place" DROP CONSTRAINT "FK_d3a15d9a574e2f73da2479d7d32"`);
    await queryRunner.query(`
        CREATE TABLE "country" (
            "id" SERIAL NOT NULL,
            "createdAt" TIMESTAMP NOT NULL DEFAULT now(),
            "updatedAt" TIMESTAMP NOT NULL DEFAULT now(),
            "deletedAt" TIMESTAMP,
            "name" character varying(64) NOT NULL,
            CONSTRAINT "UQ_2c5aa339240c0c3ae97fcc9dc4c" UNIQUE ("name"),
            CONSTRAINT "PK_bf6e37c231c4f4ea56dcd887269" PRIMARY KEY ("id")
        )
    `);
    await queryRunner.query(`
        ALTER TABLE "place" ADD CONSTRAINT "FK_f4b32f3adaa94058e15ffa1ab96"
        FOREIGN KEY ("roomId") REFERENCES "room"("id")
        ON DELETE NO ACTION ON UPDATE NO ACTION
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('ALTER TABLE "place" DROP CONSTRAINT "FK_f4b32f3adaa94058e15ffa1ab96"');
    await queryRunner.query('DROP TABLE "country"');
    await queryRunner.query(`
        ALTER TABLE "place" ADD CONSTRAINT "FK_d3a15d9a574e2f73da2479d7d32"
            FOREIGN KEY ("roomId") REFERENCES "room"("id")
            ON DELETE NO ACTION ON UPDATE NO ACTION
    `);
  }
}
