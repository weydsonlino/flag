/*
  Warnings:

  - You are about to drop the `Desafios` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Desafios";

-- CreateTable
CREATE TABLE "challengers" (
    "id" TEXT NOT NULL,
    "country_name" TEXT NOT NULL,
    "flag_link" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "challengers_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "challengers_country_name_key" ON "challengers"("country_name");
