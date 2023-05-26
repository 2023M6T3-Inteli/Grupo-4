/*
  Warnings:

  - You are about to drop the column `coleaderId` on the `Project` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Project" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "projectType" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "startDate" DATETIME NOT NULL,
    "endDate" DATETIME NOT NULL,
    "deadline" DATETIME NOT NULL,
    "deliveryTime" DATETIME NOT NULL,
    "ownerId" TEXT NOT NULL,
    CONSTRAINT "Project_ownerId_fkey" FOREIGN KEY ("ownerId") REFERENCES "User" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_Project" ("createdAt", "deadline", "deliveryTime", "description", "endDate", "id", "ownerId", "projectType", "startDate", "title", "updatedAt") SELECT "createdAt", "deadline", "deliveryTime", "description", "endDate", "id", "ownerId", "projectType", "startDate", "title", "updatedAt" FROM "Project";
DROP TABLE "Project";
ALTER TABLE "new_Project" RENAME TO "Project";
CREATE UNIQUE INDEX "Project_id_key" ON "Project"("id");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
