import type { ProductImage, ProductList, Product as ProductPrisma } from "@prisma/client";

export interface ProductInterface extends ProductPrisma {
  ProductImage: ProductImage[];
  ProductList?: ProductList[];
}

export interface CartProduct {
  id: string;
  slug: string;
  title: string;
  price: number;
  quantity: number;
  image: string;
}
