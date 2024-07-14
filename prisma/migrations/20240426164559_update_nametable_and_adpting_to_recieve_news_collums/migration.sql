/*
  Warnings:

  - You are about to drop the `challengers` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "challengers";

-- CreateTable
CREATE TABLE "countrys_flags" (
    "id" TEXT NOT NULL,
    "country_name" TEXT NOT NULL,
    "easy_flag_link" TEXT NOT NULL,
    "hard_flag_link" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "number" SERIAL NOT NULL,

    CONSTRAINT "countrys_flags_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "countrys_flags_country_name_key" ON "countrys_flags"("country_name");

-- CreateIndex
CREATE UNIQUE INDEX "countrys_flags_number_key" ON "countrys_flags"("number");
