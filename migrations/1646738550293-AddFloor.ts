import { MigrationInterface, QueryRunner } from 'typeorm';

export class AddFloor1646738550293 implements MigrationInterface {
  name = 'AddFloor1646738550293';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
        CREATE TABLE "floor" (
            "id" SERIAL NOT NULL,
            "createdAt" TIMESTAMP NOT NULL DEFAULT now(),
            "updatedAt" TIMESTAMP NOT NULL DEFAULT now(),
            "deletedAt" TIMESTAMP,
            "name" character varying(64) NOT NULL,
            "hostelId" integer,
            CONSTRAINT "UQ_a6b4f1cfb48849d05e0158079f8" UNIQUE ("name"),
            CONSTRAINT "PK_16a0823530c5b0dd226b8a96ee1" PRIMARY KEY ("id")
        )
    `);
    await queryRunner.query(`
        ALTER TABLE "floor" ADD CONSTRAINT "FK_7a0b15114dbba33d6a1700bb97a"
            FOREIGN KEY ("hostelId") REFERENCES "dormitory"("id")
            ON DELETE NO ACTION ON UPDATE NO ACTION
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('ALTER TABLE "floor" DROP CONSTRAINT "FK_7a0b15114dbba33d6a1700bb97a"');
    await queryRunner.query('DROP TABLE "floor"');
  }
}
