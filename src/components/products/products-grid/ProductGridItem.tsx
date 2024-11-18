import { AddToCart } from "@/components/product/add-to-cart/AddToCart";
import type { ProductInterface } from "@/interfaces";
import Image from "next/image";
import Link from "next/link";

interface Props {
  product: ProductInterface;
}

export const ProductGridItem = ({ product }: Props) => {
  const image = product.ProductImage[0];
  return (
    <li className="flex flex-col">
      <Link href={`/product/${product.slug}`} className="overflow-hidden">
        <Image
          className="w-full h-auto mb-1 transition-transform duration-300 ease-in-out transform hover:scale-110"
          src={image.url}
          alt={image.alt}
          width={500}
          height={500}
        />
      </Link>
      <Link
        className="mb-1 flex-1 flex items-center hover:text-forestGreen"
        href={`/product/${product.slug}`}
      >
        <h3 className="truncate">{product.title}</h3>
      </Link>

      <div className="flex justify-between items-center hover:text-forestGreen">
        <Link href={`/product/${product.slug}`}>{`$ ${product.price}`}</Link>
        <AddToCart productId={product.id} />
      </div>
    </li>
  );
};
