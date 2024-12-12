import type { Category as CategoryPrisma } from "@prisma/client";

export interface CategoryInterface extends CategoryPrisma {
  productCount: number;
  categories?: CategoryInterface[] | null;
}

export type ShortCategory = {
  id: string;
  name: string;
};
