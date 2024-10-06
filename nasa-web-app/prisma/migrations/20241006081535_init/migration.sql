-- CreateTable
CREATE TABLE "Asteroids" (
    "full_name" TEXT NOT NULL PRIMARY KEY,
    "a" REAL NOT NULL,
    "e" REAL NOT NULL,
    "I" REAL NOT NULL,
    "L" REAL NOT NULL,
    "longPeri" REAL NOT NULL,
    "longNode" REAL NOT NULL,
    "size" REAL NOT NULL,
    "H" REAL NOT NULL,
    "pha" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Planets" (
    "full_name" TEXT NOT NULL PRIMARY KEY,
    "a" REAL NOT NULL,
    "e" REAL NOT NULL,
    "I" REAL NOT NULL,
    "L" REAL NOT NULL,
    "longPeri" REAL NOT NULL,
    "longNode" REAL NOT NULL,
    "size" REAL NOT NULL,
    "axialTilt" REAL NOT NULL,
    "rotPeriod" REAL NOT NULL,
    "tex" TEXT NOT NULL
);
