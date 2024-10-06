-- CreateTable
CREATE TABLE "Comets" (
    "full_name" TEXT NOT NULL PRIMARY KEY,
    "a" REAL NOT NULL,
    "e" REAL NOT NULL,
    "i" REAL NOT NULL,
    "om" REAL NOT NULL,
    "w" REAL NOT NULL,
    "q" REAL NOT NULL,
    "ad" REAL NOT NULL,
    "per_y" REAL NOT NULL,
    "data_arc" REAL NOT NULL,
    "condition_code" REAL NOT NULL,
    "n_obs_used" REAL NOT NULL,
    "n_del_obs_used" REAL NOT NULL,
    "n_dop_obs_used" REAL NOT NULL,
    "H" REAL NOT NULL,
    "pha" REAL NOT NULL
);
