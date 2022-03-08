import { MigrationInterface, QueryRunner } from 'typeorm';

export class AddFaculty1646767944255 implements MigrationInterface {
  name = 'AddFaculty1646767944255';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
        CREATE TABLE "faculty" (
            "id" SERIAL NOT NULL,
            "createdAt" TIMESTAMP NOT NULL DEFAULT now(),
            "updatedAt" TIMESTAMP NOT NULL DEFAULT now(),
            "deletedAt" TIMESTAMP,
            "name" character varying(64) NOT NULL,
            CONSTRAINT "UQ_51150eab3799d36d1ee6f9a6433" UNIQUE ("name"),
            CONSTRAINT "PK_635ca3484f9c747b6635a494ad9" PRIMARY KEY ("id")
        )
    `);
    await queryRunner.query('ALTER TABLE "floor" DROP CONSTRAINT "FK_7a0b15114dbba33d6a1700bb97a"');
    await queryRunner.query('ALTER TABLE "floor" RENAME COLUMN "hostelId" TO "dormitoryId"');
    await queryRunner.query(`
        ALTER TABLE "floor" ADD CONSTRAINT "FK_a8416b9c7e5367b618a8ef376e8"
            FOREIGN KEY ("dormitoryId") REFERENCES "dormitory"("id")
            ON DELETE NO ACTION ON UPDATE NO ACTION
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('ALTER TABLE "floor" DROP CONSTRAINT "FK_a8416b9c7e5367b618a8ef376e8"');
    await queryRunner.query('ALTER TABLE "floor" RENAME COLUMN "dormitoryId" TO "hostelId"');
    await queryRunner.query(`
        ALTER TABLE "floor" ADD CONSTRAINT "FK_7a0b15114dbba33d6a1700bb97a"
            FOREIGN KEY ("hostelId") REFERENCES "dormitory"("id")
            ON DELETE NO ACTION ON UPDATE NO ACTION
    `);
    await queryRunner.query('DROP TABLE "faculty"');
  }
}
