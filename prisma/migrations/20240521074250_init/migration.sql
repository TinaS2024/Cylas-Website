-- CreateTable
CREATE TABLE "Gast" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "erstellungsdatum" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "name" TEXT NOT NULL,
    "nachricht" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Gast_name_key" ON "Gast"("name");
