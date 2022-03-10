import { MigrationInterface, QueryRunner } from 'typeorm';

export class AddGroup1646772423164 implements MigrationInterface {
  name = 'AddGroup1646772423164';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
        CREATE TABLE "group" (
            "id" SERIAL NOT NULL,
            "createdAt" TIMESTAMP NOT NULL DEFAULT now(),
            "updatedAt" TIMESTAMP NOT NULL DEFAULT now(),
            "deletedAt" TIMESTAMP,
            "name" character varying(64) NOT NULL,
            "facultyId" integer NOT NULL,
            CONSTRAINT "UQ_8a45300fd825918f3b40195fbdc" UNIQUE ("name"),
            CONSTRAINT "PK_256aa0fda9b1de1a73ee0b7106b" PRIMARY KEY ("id")
        )
    `);
    await queryRunner.query(`
        ALTER TABLE "group" ADD CONSTRAINT "FK_fcb18dffa08cbd2f5c84e8a1d37"
        FOREIGN KEY ("facultyId") REFERENCES "faculty"("id")
        ON DELETE NO ACTION ON UPDATE NO ACTION
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('ALTER TABLE "group" DROP CONSTRAINT "FK_fcb18dffa08cbd2f5c84e8a1d37"');
    await queryRunner.query('DROP TABLE "group"');
  }
}
