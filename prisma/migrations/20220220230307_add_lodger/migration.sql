-- CreateTable
CREATE TABLE "Lodger" (
    "id" TEXT NOT NULL DEFAULT uuid_generate_v4(),
    "login" VARCHAR(50) NOT NULL,
    "password" VARCHAR(50) NOT NULL DEFAULT md5(random()::text),
    "first_name" VARCHAR(50) NOT NULL,
    "last_name" VARCHAR(50) NOT NULL,
    "patronomic" VARCHAR(50),
    "groupId" TEXT,
    "placeId" TEXT,
    "phone" VARCHAR(11),
    "contract_id" INTEGER,
    "contract_date" TIMESTAMP(3),
    "countryId" TEXT,

    CONSTRAINT "Lodger_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Lodger_login_key" ON "Lodger"("login");

-- AddForeignKey
ALTER TABLE "Lodger" ADD CONSTRAINT "Lodger_placeId_fkey" FOREIGN KEY ("placeId") REFERENCES "Place"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Lodger" ADD CONSTRAINT "Lodger_groupId_fkey" FOREIGN KEY ("groupId") REFERENCES "Group"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Lodger" ADD CONSTRAINT "Lodger_countryId_fkey" FOREIGN KEY ("countryId") REFERENCES "Country"("id") ON DELETE SET NULL ON UPDATE CASCADE;
