-- CreateTable
CREATE TABLE "Country" (
    "id" TEXT NOT NULL DEFAULT uuid_generate_v4(),
    "name" VARCHAR(50) NOT NULL,

    CONSTRAINT "Country_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Country_name_key" ON "Country"("name");
