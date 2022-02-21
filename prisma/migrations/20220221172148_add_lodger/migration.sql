-- CreateTable
CREATE TABLE "Lodger" (
    "id" TEXT NOT NULL DEFAULT uuid_generate_v4(),
    "login" VARCHAR(50) NOT NULL,
    "password" VARCHAR(50) NOT NULL DEFAULT md5(random()::text),
    "firstName" VARCHAR(50) NOT NULL,
    "lastName" VARCHAR(50) NOT NULL,
    "patronymic" VARCHAR(50),
    "hostelId" TEXT NOT NULL,
    "placeId" TEXT,
    "groupId" TEXT,
    "phone" VARCHAR(11),
    "contractId" INTEGER,
    "contractDate" TIMESTAMP(3),
    "countryId" TEXT,

    CONSTRAINT "Lodger_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Lodger_login_key" ON "Lodger"("login");

-- AddForeignKey
ALTER TABLE "Lodger" ADD CONSTRAINT "Lodger_hostelId_fkey" FOREIGN KEY ("hostelId") REFERENCES "Hostel"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Lodger" ADD CONSTRAINT "Lodger_placeId_fkey" FOREIGN KEY ("placeId") REFERENCES "Place"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Lodger" ADD CONSTRAINT "Lodger_groupId_fkey" FOREIGN KEY ("groupId") REFERENCES "Group"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Lodger" ADD CONSTRAINT "Lodger_countryId_fkey" FOREIGN KEY ("countryId") REFERENCES "Country"("id") ON DELETE SET NULL ON UPDATE CASCADE;
