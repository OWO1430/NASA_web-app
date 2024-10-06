/*
  Warnings:

  - You are about to drop the column `i` on the `Asteroids` table. All the data in the column will be lost.
  - You are about to drop the column `n_del_obs_used` on the `Asteroids` table. All the data in the column will be lost.
  - You are about to drop the column `n_dop_obs_used` on the `Asteroids` table. All the data in the column will be lost.
  - You are about to drop the column `om` on the `Asteroids` table. All the data in the column will be lost.
  - You are about to drop the column `w` on the `Asteroids` table. All the data in the column will be lost.
  - You are about to drop the column `i` on the `Comets` table. All the data in the column will be lost.
  - You are about to drop the column `n_del_obs_used` on the `Comets` table. All the data in the column will be lost.
  - You are about to drop the column `n_dop_obs_used` on the `Comets` table. All the data in the column will be lost.
  - You are about to drop the column `om` on the `Comets` table. All the data in the column will be lost.
  - You are about to drop the column `w` on the `Comets` table. All the data in the column will be lost.
  - Added the required column `I` to the `Asteroids` table without a default value. This is not possible if the table is not empty.
  - Added the required column `longNode` to the `Asteroids` table without a default value. This is not possible if the table is not empty.
  - Added the required column `longPeri` to the `Asteroids` table without a default value. This is not possible if the table is not empty.
  - Added the required column `I` to the `Comets` table without a default value. This is not possible if the table is not empty.
  - Added the required column `longNode` to the `Comets` table without a default value. This is not possible if the table is not empty.
  - Added the required column `longPeri` to the `Comets` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Asteroids" (
    "full_name" TEXT NOT NULL PRIMARY KEY,
    "a" REAL NOT NULL,
    "e" REAL NOT NULL,
    "I" REAL NOT NULL,
    "longNode" REAL NOT NULL,
    "longPeri" REAL NOT NULL,
    "q" REAL NOT NULL,
    "ad" REAL NOT NULL,
    "per_y" REAL NOT NULL,
    "data_arc" REAL NOT NULL,
    "condition_code" REAL NOT NULL,
    "n_obs_used" REAL NOT NULL,
    "H" REAL NOT NULL,
    "pha" REAL NOT NULL
);
INSERT INTO "new_Asteroids" ("H", "a", "ad", "condition_code", "data_arc", "e", "full_name", "n_obs_used", "per_y", "pha", "q") SELECT "H", "a", "ad", "condition_code", "data_arc", "e", "full_name", "n_obs_used", "per_y", "pha", "q" FROM "Asteroids";
DROP TABLE "Asteroids";
ALTER TABLE "new_Asteroids" RENAME TO "Asteroids";
CREATE TABLE "new_Comets" (
    "full_name" TEXT NOT NULL PRIMARY KEY,
    "a" REAL NOT NULL,
    "e" REAL NOT NULL,
    "I" REAL NOT NULL,
    "longNode" REAL NOT NULL,
    "longPeri" REAL NOT NULL,
    "q" REAL NOT NULL,
    "ad" REAL NOT NULL,
    "per_y" REAL NOT NULL,
    "data_arc" REAL NOT NULL,
    "condition_code" REAL NOT NULL,
    "n_obs_used" REAL NOT NULL,
    "H" REAL NOT NULL,
    "pha" REAL NOT NULL
);
INSERT INTO "new_Comets" ("H", "a", "ad", "condition_code", "data_arc", "e", "full_name", "n_obs_used", "per_y", "pha", "q") SELECT "H", "a", "ad", "condition_code", "data_arc", "e", "full_name", "n_obs_used", "per_y", "pha", "q" FROM "Comets";
DROP TABLE "Comets";
ALTER TABLE "new_Comets" RENAME TO "Comets";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
