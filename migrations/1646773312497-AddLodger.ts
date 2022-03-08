import { MigrationInterface, QueryRunner } from 'typeorm';

export class AddLodger1646773312497 implements MigrationInterface {
  name = 'AddLodger1646773312497';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
        CREATE TABLE "lodger" (
            "id" SERIAL NOT NULL,
            "createdAt" TIMESTAMP NOT NULL DEFAULT now(),
            "updatedAt" TIMESTAMP NOT NULL DEFAULT now(),
            "deletedAt" TIMESTAMP,
            "login" character varying(64) NOT NULL,
            "password" character varying(128) NOT NULL,
            "lastName" character varying(64) NOT NULL,
            "firstName" character varying(64) NOT NULL,
            "patronymic" character varying(64),
            "phone" character varying(11),
            "contractId" integer,
            "contractDate" TIMESTAMP,
            "dormitoryId" integer,
            "placeId" integer,
            "groupId" integer,
            "countryId" integer,
            CONSTRAINT "UQ_902fb7565dadfcc3d820c86cd0c" UNIQUE ("login"),
            CONSTRAINT "PK_9247c67ab8b83bdbb01066435b3" PRIMARY KEY ("id")
        )
    `);
    await queryRunner.query(`
        ALTER TABLE "lodger" ADD CONSTRAINT "FK_9a4a532d0cca44461021cacf388"
            FOREIGN KEY ("dormitoryId") REFERENCES "dormitory"("id")
            ON DELETE NO ACTION ON UPDATE NO ACTION`);
    await queryRunner.query(`
        ALTER TABLE "lodger" ADD CONSTRAINT "FK_1ff65c6267b20a51c1527a33ba2"
            FOREIGN KEY ("placeId") REFERENCES "place"("id")
            ON DELETE NO ACTION ON UPDATE NO ACTION
    `);
    await queryRunner.query(`
        ALTER TABLE "lodger" ADD CONSTRAINT "FK_e912cae907ae476e9c45b005e7d"
            FOREIGN KEY ("groupId") REFERENCES "group"("id")
            ON DELETE NO ACTION ON UPDATE NO ACTION
    `);
    await queryRunner.query(`
        ALTER TABLE "lodger" ADD CONSTRAINT "FK_6ae9fe804da40bebd8661aee62e"
            FOREIGN KEY ("countryId") REFERENCES "country"("id")
            ON DELETE NO ACTION ON UPDATE NO ACTION
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('ALTER TABLE "lodger" DROP CONSTRAINT "FK_6ae9fe804da40bebd8661aee62e"');
    await queryRunner.query('ALTER TABLE "lodger" DROP CONSTRAINT "FK_e912cae907ae476e9c45b005e7d"');
    await queryRunner.query('ALTER TABLE "lodger" DROP CONSTRAINT "FK_1ff65c6267b20a51c1527a33ba2"');
    await queryRunner.query('ALTER TABLE "lodger" DROP CONSTRAINT "FK_9a4a532d0cca44461021cacf388"');
    await queryRunner.query('DROP TABLE "lodger"');
  }
}
