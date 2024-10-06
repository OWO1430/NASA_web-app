/*
  Warnings:

  - You are about to drop the `Comets` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the column `ad` on the `Asteroids` table. All the data in the column will be lost.
  - You are about to drop the column `condition_code` on the `Asteroids` table. All the data in the column will be lost.
  - You are about to drop the column `data_arc` on the `Asteroids` table. All the data in the column will be lost.
  - You are about to drop the column `n_obs_used` on the `Asteroids` table. All the data in the column will be lost.
  - You are about to drop the column `per_y` on the `Asteroids` table. All the data in the column will be lost.
  - You are about to drop the column `q` on the `Asteroids` table. All the data in the column will be lost.
  - Added the required column `size` to the `Asteroids` table without a default value. This is not possible if the table is not empty.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "Comets";
PRAGMA foreign_keys=on;

-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Asteroids" (
    "full_name" TEXT NOT NULL PRIMARY KEY,
    "a" REAL NOT NULL,
    "e" REAL NOT NULL,
    "I" REAL NOT NULL,
    "longPeri" REAL NOT NULL,
    "longNode" REAL NOT NULL,
    "size" REAL NOT NULL,
    "H" REAL NOT NULL,
    "pha" REAL NOT NULL
);
INSERT INTO "new_Asteroids" ("H", "I", "a", "e", "full_name", "longNode", "longPeri", "pha") SELECT "H", "I", "a", "e", "full_name", "longNode", "longPeri", "pha" FROM "Asteroids";
DROP TABLE "Asteroids";
ALTER TABLE "new_Asteroids" RENAME TO "Asteroids";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
