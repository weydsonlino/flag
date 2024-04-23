/*
  Warnings:

  - A unique constraint covering the columns `[number]` on the table `challengers` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "challengers" ADD COLUMN     "number" SERIAL NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "challengers_number_key" ON "challengers"("number");
