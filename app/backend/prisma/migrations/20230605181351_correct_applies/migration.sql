/*
  Warnings:

  - You are about to drop the column `abilities` on the `Applies` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Applies" DROP CONSTRAINT "Applies_offerId_fkey";

-- AlterTable
ALTER TABLE "Applies" DROP COLUMN "abilities",
ALTER COLUMN "status" SET DEFAULT 'PENDING';

-- AddForeignKey
ALTER TABLE "Applies" ADD CONSTRAINT "Applies_offerId_fkey" FOREIGN KEY ("offerId") REFERENCES "Offers"("id") ON DELETE CASCADE ON UPDATE CASCADE;
