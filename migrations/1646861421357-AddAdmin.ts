import { MigrationInterface, QueryRunner } from 'typeorm';

export class AddAdmin1646861421357 implements MigrationInterface {
  name = 'AddAdmin1646861421357';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
        CREATE TABLE "admin" (
            "id" SERIAL NOT NULL,
            "createdAt" TIMESTAMP NOT NULL DEFAULT now(),
            "updatedAt" TIMESTAMP NOT NULL DEFAULT now(),
            "deletedAt" TIMESTAMP,
            "login" character varying(64) NOT NULL,
            "password" character varying(128) NOT NULL,
            "lastName" character varying(64) NOT NULL,
            "firstName" character varying(64) NOT NULL,
            "patronymic" character varying(64),
            "roleId" integer NOT NULL,
            CONSTRAINT "UQ_4e22b047986b40e5018b04a71c7" UNIQUE ("login"),
            CONSTRAINT "PK_e032310bcef831fb83101899b10" PRIMARY KEY ("id")
        )
    `);
    await queryRunner.query(`
        CREATE TABLE "admins_to_faculties" (
            "adminId" integer NOT NULL,
            "facultyId" integer NOT NULL,
            CONSTRAINT "PK_f4bf70567219738dbd0e6abad9d" PRIMARY KEY ("adminId", "facultyId")
        )
    `);
    await queryRunner.query('CREATE INDEX "IDX_9ff67032e1a1cf3916ad176bb5" ON "admins_to_faculties" ("adminId")');
    await queryRunner.query('CREATE INDEX "IDX_05ac6761339ca3b3d55cc70c10" ON "admins_to_faculties" ("facultyId")');
    await queryRunner.query(`
        ALTER TABLE "admin" ADD CONSTRAINT "FK_446fb0cc55eed0065ececcc889b"
            FOREIGN KEY ("roleId") REFERENCES "role"("id")
            ON DELETE NO ACTION ON UPDATE NO ACTION
    `);
    await queryRunner.query(`
        ALTER TABLE "admins_to_faculties" ADD CONSTRAINT "FK_9ff67032e1a1cf3916ad176bb5a"
            FOREIGN KEY ("adminId") REFERENCES "admin"("id")
            ON DELETE CASCADE ON UPDATE CASCADE
    `);
    await queryRunner.query(`
        ALTER TABLE "admins_to_faculties" ADD CONSTRAINT "FK_05ac6761339ca3b3d55cc70c10b"
            FOREIGN KEY ("facultyId") REFERENCES "faculty"("id")
            ON DELETE NO ACTION ON UPDATE NO ACTION
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('ALTER TABLE "admins_to_faculties" DROP CONSTRAINT "FK_05ac6761339ca3b3d55cc70c10b"');
    await queryRunner.query('ALTER TABLE "admins_to_faculties" DROP CONSTRAINT "FK_9ff67032e1a1cf3916ad176bb5a"');
    await queryRunner.query('ALTER TABLE "admin" DROP CONSTRAINT "FK_446fb0cc55eed0065ececcc889b"');
    await queryRunner.query('DROP INDEX "public"."IDX_05ac6761339ca3b3d55cc70c10"');
    await queryRunner.query('DROP INDEX "public"."IDX_9ff67032e1a1cf3916ad176bb5"');
    await queryRunner.query('DROP TABLE "admins_to_faculties"');
    await queryRunner.query('DROP TABLE "admin"');
  }
}
