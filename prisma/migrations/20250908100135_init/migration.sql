-- CreateTable
CREATE TABLE "Gast" (
    "id" SERIAL NOT NULL,
    "erstellungsdatum" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "name" TEXT NOT NULL,
    "nachricht" TEXT NOT NULL,

    CONSTRAINT "Gast_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Gast_name_key" ON "Gast"("name");
