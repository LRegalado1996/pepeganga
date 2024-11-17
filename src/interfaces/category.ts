import type { Category as CategoryPrisma } from "@prisma/client";

export interface CategoryInterface extends CategoryPrisma {
  productCount: number;
  categories?: CategoryInterface[];
}
