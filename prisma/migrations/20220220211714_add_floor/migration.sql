-- CreateTable
CREATE TABLE "Floor" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "hostelId" INTEGER NOT NULL,

    CONSTRAINT "Floor_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Floor_name_key" ON "Floor"("name");

-- AddForeignKey
ALTER TABLE "Floor" ADD CONSTRAINT "Floor_hostelId_fkey" FOREIGN KEY ("hostelId") REFERENCES "Hostel"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
