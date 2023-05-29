/*
  Warnings:

  - You are about to drop the column `tags` on the `Content` table. All the data in the column will be lost.
  - You are about to drop the column `projectId` on the `Tag` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Applies" DROP CONSTRAINT "Applies_projectId_fkey";

-- DropForeignKey
ALTER TABLE "Offers" DROP CONSTRAINT "Offers_projectId_fkey";

-- DropForeignKey
ALTER TABLE "Tag" DROP CONSTRAINT "Tag_projectId_fkey";

-- AlterTable
ALTER TABLE "Content" DROP COLUMN "tags";

-- AlterTable
ALTER TABLE "Project" ADD COLUMN     "tags" TEXT NOT NULL DEFAULT '[]';

-- AlterTable
ALTER TABLE "Tag" DROP COLUMN "projectId",
ADD COLUMN     "contentId" TEXT;

-- AddForeignKey
ALTER TABLE "Offers" ADD CONSTRAINT "Offers_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES "Project"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Tag" ADD CONSTRAINT "Tag_contentId_fkey" FOREIGN KEY ("contentId") REFERENCES "Content"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Applies" ADD CONSTRAINT "Applies_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES "Project"("id") ON DELETE CASCADE ON UPDATE CASCADE;
