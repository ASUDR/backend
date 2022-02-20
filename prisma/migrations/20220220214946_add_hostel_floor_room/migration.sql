-- CreateTable
CREATE TABLE "Hostel" (
    "id" TEXT NOT NULL DEFAULT uuid_generate_v4(),
    "name" VARCHAR(50) NOT NULL,

    CONSTRAINT "Hostel_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Floor" (
    "id" TEXT NOT NULL DEFAULT uuid_generate_v4(),
    "name" VARCHAR(50) NOT NULL,
    "hostelId" TEXT NOT NULL,

    CONSTRAINT "Floor_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Room" (
    "id" TEXT NOT NULL DEFAULT uuid_generate_v4(),
    "name" VARCHAR(50) NOT NULL,
    "floorId" TEXT NOT NULL,

    CONSTRAINT "Room_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Hostel_name_key" ON "Hostel"("name");

-- AddForeignKey
ALTER TABLE "Floor" ADD CONSTRAINT "Floor_hostelId_fkey" FOREIGN KEY ("hostelId") REFERENCES "Hostel"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Room" ADD CONSTRAINT "Room_floorId_fkey" FOREIGN KEY ("floorId") REFERENCES "Floor"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
