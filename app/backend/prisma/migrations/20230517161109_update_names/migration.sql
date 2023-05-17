/*
  Warnings:

  - You are about to drop the `Role` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the column `roleId` on the `Applies` table. All the data in the column will be lost.
  - Added the required column `offerId` to the `Applies` table without a default value. This is not possible if the table is not empty.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "Role";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "Offers" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "count" INTEGER NOT NULL,
    "projectId" TEXT NOT NULL,
    CONSTRAINT "Offers_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES "Project" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Applies" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "projectId" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "why" TEXT NOT NULL,
    "abilities" TEXT NOT NULL,
    "offerId" TEXT NOT NULL,
    CONSTRAINT "Applies_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES "Project" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Applies_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "Applies_offerId_fkey" FOREIGN KEY ("offerId") REFERENCES "Offers" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Applies" ("abilities", "id", "projectId", "status", "userId", "why") SELECT "abilities", "id", "projectId", "status", "userId", "why" FROM "Applies";
DROP TABLE "Applies";
ALTER TABLE "new_Applies" RENAME TO "Applies";
CREATE UNIQUE INDEX "Applies_id_key" ON "Applies"("id");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
