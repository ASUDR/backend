import { MigrationInterface, QueryRunner } from 'typeorm';

export class AddAdminConfirmedFlag1647199028468 implements MigrationInterface {
  name = 'AddAdminConfirmedFlag1647199028468';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "admin" ADD "isConfirmed" boolean NOT NULL DEFAULT false`,
    );
    await queryRunner.query(`ALTER TABLE "admin" ADD "confirmedById" integer`);
    await queryRunner.query(`
      ALTER TABLE "admin"
      ALTER COLUMN "roleId"
      DROP NOT NULL
    `);
    await queryRunner.query(`
      ALTER TABLE "admin" ADD CONSTRAINT "FK_2bc3c114822e37251b9eb2496f8"
        FOREIGN KEY ("confirmedById") REFERENCES "admin"("id")
        ON DELETE NO ACTION ON UPDATE NO ACTION
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "admin" DROP CONSTRAINT "FK_2bc3c114822e37251b9eb2496f8"`,
    );
    await queryRunner.query(`
      ALTER TABLE "admin"
      ALTER COLUMN "roleId"
      SET NOT NULL
    `);
    await queryRunner.query(`ALTER TABLE "admin" DROP COLUMN "confirmedById"`);
    await queryRunner.query(`ALTER TABLE "admin" DROP COLUMN "isConfirmed"`);
  }
}
