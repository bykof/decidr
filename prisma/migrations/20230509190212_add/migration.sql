-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_DecisionGroup" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO "new_DecisionGroup" ("id") SELECT "id" FROM "DecisionGroup";
DROP TABLE "DecisionGroup";
ALTER TABLE "new_DecisionGroup" RENAME TO "DecisionGroup";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
