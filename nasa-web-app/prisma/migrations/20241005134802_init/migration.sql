-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Planets" (
    "full_name" TEXT NOT NULL PRIMARY KEY,
    "a" REAL NOT NULL,
    "e" REAL NOT NULL,
    "I" REAL NOT NULL,
    "L" REAL NOT NULL,
    "longPeri" REAL NOT NULL,
    "longNode" REAL NOT NULL,
    "size" REAL NOT NULL,
    "tex" TEXT NOT NULL,
    "axialTilt" REAL NOT NULL,
    "rotPeriod" REAL NOT NULL
);
INSERT INTO "new_Planets" ("I", "L", "a", "axialTilt", "e", "full_name", "longNode", "longPeri", "rotPeriod", "size", "tex") SELECT "I", "L", "a", "axialTilt", "e", "full_name", "longNode", "longPeri", "rotPeriod", "size", "tex" FROM "Planets";
DROP TABLE "Planets";
ALTER TABLE "new_Planets" RENAME TO "Planets";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
