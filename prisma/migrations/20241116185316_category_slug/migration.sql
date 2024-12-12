/*
  Warnings:

  - A unique constraint covering the columns `[slug]` on the table `Category` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `image` to the `Category` table without a default value. This is not possible if the table is not empty.
  - Added the required column `slug` to the `Category` table without a default value. This is not possible if the table is not empty.
  - Made the column `parentId` on table `Category` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "Category" DROP CONSTRAINT "Category_parentId_fkey";

-- DropIndex
DROP INDEX "Category_name_key";

-- AlterTable
ALTER TABLE "Category" ADD COLUMN     "image" TEXT NOT NULL,
ADD COLUMN     "slug" TEXT NOT NULL,
ALTER COLUMN "parentId" SET NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Category_slug_key" ON "Category"("slug");

-- CreateIndex
CREATE INDEX "Category_name_parentId_idx" ON "Category"("name", "parentId");

-- AddForeignKey
ALTER TABLE "Category" ADD CONSTRAINT "Category_parentId_fkey" FOREIGN KEY ("parentId") REFERENCES "Category"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
