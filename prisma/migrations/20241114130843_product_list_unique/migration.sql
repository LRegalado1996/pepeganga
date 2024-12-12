/*
  Warnings:

  - A unique constraint covering the columns `[title]` on the table `ProductList` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "ProductList_title_key" ON "ProductList"("title");
