-- CreateTable
CREATE TABLE "Group" (
    "id" TEXT NOT NULL DEFAULT uuid_generate_v4(),
    "name" VARCHAR(50) NOT NULL,
    "facultyId" TEXT NOT NULL,

    CONSTRAINT "Group_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Group_name_key" ON "Group"("name");

-- AddForeignKey
ALTER TABLE "Group" ADD CONSTRAINT "Group_facultyId_fkey" FOREIGN KEY ("facultyId") REFERENCES "Faculty"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
