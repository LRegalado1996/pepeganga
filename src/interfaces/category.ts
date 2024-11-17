import type { Category as CategoryPrisma } from "@prisma/client";
import { ProductInterface } from "./product";

export interface CategoryInterface extends CategoryPrisma {
  Product?: ProductInterface[];
}

export interface ChildrenCategoryInterface extends CategoryPrisma {
  productCount: number;
  categories?: ChildrenCategoryInterface[];
}
