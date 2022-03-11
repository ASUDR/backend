import { MigrationInterface, QueryRunner } from 'typeorm';

export class UpdateAdminPasswordLength1647038795521
  implements MigrationInterface
{
  name = 'UpdateAdminPasswordLength1647038795521';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "admins_to_faculties" DROP CONSTRAINT "FK_05ac6761339ca3b3d55cc70c10b"`,
    );
    await queryRunner.query(
      `ALTER TABLE "admins_to_faculties" DROP CONSTRAINT "FK_9ff67032e1a1cf3916ad176bb5a"`,
    );
    await queryRunner.query(
      `DROP INDEX "public"."IDX_9ff67032e1a1cf3916ad176bb5"`,
    );
    await queryRunner.query(
      `DROP INDEX "public"."IDX_05ac6761339ca3b3d55cc70c10"`,
    );
    await queryRunner.query(`
        ALTER TABLE "admin"
        ALTER COLUMN "password"
        TYPE character varying(60)
    `);
    await queryRunner.query(
      `ALTER TABLE "lodger" ALTER COLUMN "lastName" SET NOT NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE "lodger" ALTER COLUMN "firstName" SET NOT NULL`,
    );
    await queryRunner.query(
      `CREATE INDEX "IDX_158984a3781f8286f4387debfb" ON "admins_to_faculties" ("adminId") `,
    );
    await queryRunner.query(
      `CREATE INDEX "IDX_ce0d0f35dea731d7fe8be94120" ON "admins_to_faculties" ("facultyId") `,
    );
    await queryRunner.query(
      `ALTER TABLE "admins_to_faculties" ADD CONSTRAINT "FK_158984a3781f8286f4387debfbc"
        FOREIGN KEY ("adminId") REFERENCES "admin"("id")
        ON DELETE CASCADE ON UPDATE CASCADE`,
    );
    await queryRunner.query(
      `ALTER TABLE "admins_to_faculties" ADD CONSTRAINT "FK_ce0d0f35dea731d7fe8be941207"
        FOREIGN KEY ("facultyId") REFERENCES "faculty"("id")
        ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "admins_to_faculties" DROP CONSTRAINT "FK_ce0d0f35dea731d7fe8be941207"`,
    );
    await queryRunner.query(
      `ALTER TABLE "admins_to_faculties" DROP CONSTRAINT "FK_158984a3781f8286f4387debfbc"`,
    );
    await queryRunner.query(
      `DROP INDEX "public"."IDX_ce0d0f35dea731d7fe8be94120"`,
    );
    await queryRunner.query(
      `DROP INDEX "public"."IDX_158984a3781f8286f4387debfb"`,
    );
    await queryRunner.query(
      `ALTER TABLE "lodger" ALTER COLUMN "firstName" DROP NOT NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE "lodger" ALTER COLUMN "lastName" DROP NOT NULL`,
    );
    await queryRunner.query(`ALTER TABLE "admin" DROP COLUMN "password"`);
    await queryRunner.query(
      `ALTER TABLE "admin" ADD "password" character varying(128) NOT NULL`,
    );
    await queryRunner.query(
      `CREATE INDEX "IDX_05ac6761339ca3b3d55cc70c10" ON "admins_to_faculties" ("facultyId") `,
    );
    await queryRunner.query(
      `CREATE INDEX "IDX_9ff67032e1a1cf3916ad176bb5" ON "admins_to_faculties" ("adminId") `,
    );
    await queryRunner.query(
      `ALTER TABLE "admins_to_faculties" ADD CONSTRAINT "FK_9ff67032e1a1cf3916ad176bb5a"
        FOREIGN KEY ("adminId") REFERENCES "admin"("id")
        ON DELETE CASCADE ON UPDATE CASCADE`,
    );
    await queryRunner.query(
      `ALTER TABLE "admins_to_faculties" ADD CONSTRAINT "FK_05ac6761339ca3b3d55cc70c10b"
        FOREIGN KEY ("facultyId") REFERENCES "faculty"("id")
        ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
  }
}
