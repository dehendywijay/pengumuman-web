-- CreateTable
CREATE TABLE "Student" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nis" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "isPassed" BOOLEAN NOT NULL DEFAULT true
);

-- CreateIndex
CREATE UNIQUE INDEX "Student_nis_key" ON "Student"("nis");
