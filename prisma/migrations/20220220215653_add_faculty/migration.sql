-- CreateTable
CREATE TABLE "Faculty" (
    "id" TEXT NOT NULL DEFAULT uuid_generate_v4(),
    "name" VARCHAR(50) NOT NULL,

    CONSTRAINT "Faculty_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_FacultyToHostel" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Faculty_name_key" ON "Faculty"("name");

-- CreateIndex
CREATE UNIQUE INDEX "_FacultyToHostel_AB_unique" ON "_FacultyToHostel"("A", "B");

-- CreateIndex
CREATE INDEX "_FacultyToHostel_B_index" ON "_FacultyToHostel"("B");

-- AddForeignKey
ALTER TABLE "_FacultyToHostel" ADD FOREIGN KEY ("A") REFERENCES "Faculty"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_FacultyToHostel" ADD FOREIGN KEY ("B") REFERENCES "Hostel"("id") ON DELETE CASCADE ON UPDATE CASCADE;
