-- DropIndex
DROP INDEX "Category_name_parentId_idx";

-- CreateIndex
CREATE INDEX "Category_name_idx" ON "Category"("name");
