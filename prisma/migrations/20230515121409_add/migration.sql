/*
  Warnings:

  - A unique constraint covering the columns `[decisionId,name]` on the table `Answer` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Answer_decisionId_name_key" ON "Answer"("decisionId", "name");
