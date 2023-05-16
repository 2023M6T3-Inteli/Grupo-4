-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "email" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "area" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "tags" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);

CREATE TABLE "Project" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "projectType" TEXT NOT NULL,
    "coleaderId" TEXT NOT NULL,
    "offers" INTEGER NOT NULL,
    "createdAt" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "startDate" TIMESTAMP NOT NULL,
    "endDate" TIMESTAMP NOT NULL,
    "deadline" TIMESTAMP NOT NULL,
    "deliveryTime" TIMESTAMP NOT NULL,
    "ownerId" TEXT NOT NULL
);

CREATE TABLE "Role" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "count" INTEGER NOT NULL,
    "projectId" TEXT NOT NULL,
    FOREIGN KEY ("projectId") REFERENCES "Project" ("id")
);

CREATE TABLE "Tag" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "projectId" TEXT NOT NULL,
    FOREIGN KEY ("projectId") REFERENCES "Project" ("id")
);

CREATE TABLE "ProjectUser" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "projectId" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "offerId" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "why" TEXT NOT NULL,
    "abilities" TEXT NOT NULL,
    "roleId" TEXT NOT NULL,
    FOREIGN KEY ("projectId") REFERENCES "Project" ("id"),
    FOREIGN KEY ("roleId") REFERENCES "Role" ("id")
);

CREATE TABLE `Content` (
  `id` TEXT NOT NULL,
  `title` TEXT NOT NULL,
  `description` TEXT NOT NULL,
  `links` TEXT NOT NULL,
  `createdAt` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `ownerId` TEXT NOT NULL,
  PRIMARY KEY (`id`),
  FOREIGN KEY (`ownerId`) REFERENCES `User` (`id`)
);

CREATE TABLE `ContentUser` (
  `id` TEXT NOT NULL,
  `userId` TEXT NOT NULL,
  `contentId` TEXT NOT NULL,
  `abilities` TEXT NOT NULL,
  PRIMARY KEY (`id`),
  FOREIGN KEY (`userId`) REFERENCES `User` (`id`),
  FOREIGN KEY (`contentId`) REFERENCES `Content` (`id`)
);


-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
