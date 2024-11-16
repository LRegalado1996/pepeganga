import { ProductGridItem } from "./ProductGridItem";
import type { ProductInterface } from "@/interfaces";

interface Props {
  products: ProductInterface[];
}

export const ProductGrid = ({ products }: Props) => {
  return (
    <ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-5">
      {products.map((product) => (
        <ProductGridItem product={product} key={product.id} />
      ))}
    </ul>
  );
};
