import type { ProductImage, Product as ProductPrisma } from "@prisma/client";

export interface ProductInterface extends ProductPrisma {
  ProductImage: ProductImage[];
}
