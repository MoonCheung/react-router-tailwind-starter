-- CreateTable
CREATE TABLE "Contact" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "first" TEXT NOT NULL,
    "last" TEXT NOT NULL,
    "avatar" TEXT NOT NULL,
    "twitter" TEXT NOT NULL,
    "notes" TEXT,
    "favorite" BOOLEAN NOT NULL DEFAULT false
);

-- CreateTable
CREATE TABLE "Planet" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "StarCluster" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "PlanetStarCluster" (
    "planetId" TEXT NOT NULL,
    "starClusterId" TEXT NOT NULL,
    "assignedAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,

    PRIMARY KEY ("planetId", "starClusterId"),
    CONSTRAINT "PlanetStarCluster_planetId_fkey" FOREIGN KEY ("planetId") REFERENCES "Planet" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "PlanetStarCluster_starClusterId_fkey" FOREIGN KEY ("starClusterId") REFERENCES "StarCluster" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "image" TEXT,
    "provider" TEXT NOT NULL DEFAULT 'Credentials',
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
