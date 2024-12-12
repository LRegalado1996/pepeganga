-- CreateTable
CREATE TABLE "ProductList" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT,
    "roles" "Role"[] DEFAULT ARRAY['admin', 'user']::"Role"[],

    CONSTRAINT "ProductList_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_ProductInLists" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_ProductInLists_AB_unique" ON "_ProductInLists"("A", "B");

-- CreateIndex
CREATE INDEX "_ProductInLists_B_index" ON "_ProductInLists"("B");

-- AddForeignKey
ALTER TABLE "_ProductInLists" ADD CONSTRAINT "_ProductInLists_A_fkey" FOREIGN KEY ("A") REFERENCES "Product"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ProductInLists" ADD CONSTRAINT "_ProductInLists_B_fkey" FOREIGN KEY ("B") REFERENCES "ProductList"("id") ON DELETE CASCADE ON UPDATE CASCADE;
