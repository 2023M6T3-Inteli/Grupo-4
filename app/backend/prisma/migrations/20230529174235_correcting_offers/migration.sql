/*
  Warnings:

  - You are about to drop the column `count` on the `Offers` table. All the data in the column will be lost.
  - Added the required column `area` to the `Offers` table without a default value. This is not possible if the table is not empty.
  - Added the required column `qntVagas` to the `Offers` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Offers" DROP COLUMN "count",
ADD COLUMN     "area" TEXT NOT NULL,
ADD COLUMN     "qntVagas" INTEGER NOT NULL;
