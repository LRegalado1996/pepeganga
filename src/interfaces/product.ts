import type { ProductImage, Product as ProductPrisma } from "@prisma/client";

export interface ProductInterface extends ProductPrisma {
  ProductImage: ProductImage[];
}

export interface CartProduct {
  id: string;
  slug: string;
  title: string;
  price: number;
  quantity: number;
  image?: string;
}
