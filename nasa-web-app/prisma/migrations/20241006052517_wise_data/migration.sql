/*
  Warnings:

  - Added the required column `L` to the `Asteroids` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Asteroids" (
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
INSERT INTO "new_Asteroids" ("H", "I", "a", "e", "full_name", "longNode", "longPeri", "pha", "size") SELECT "H", "I", "a", "e", "full_name", "longNode", "longPeri", "pha", "size" FROM "Asteroids";
DROP TABLE "Asteroids";
ALTER TABLE "new_Asteroids" RENAME TO "Asteroids";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
