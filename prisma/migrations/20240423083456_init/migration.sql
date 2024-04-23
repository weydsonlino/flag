-- CreateTable
CREATE TABLE "Desafios" (
    "id" TEXT NOT NULL,
    "country_name" TEXT NOT NULL,
    "flag_link" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Desafios_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Desafios_country_name_key" ON "Desafios"("country_name");
