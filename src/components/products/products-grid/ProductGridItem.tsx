import type { ProductInterface } from "@/interfaces";
import Image from "next/image";

interface Props {
  product: ProductInterface;
}

export const ProductGridItem = ({ product }: Props) => {
  const image = product.ProductImage[0];
  return (
    <li className="flex flex-col bg-white shadow rounded overflow-hidden">
      <Image className="w-full h-auto" src={image.url} alt={image.alt} width={500} height={500} />

      <div className="p-4 w-full flex flex-col items-center flex-1">
        <h2 className="text-center text-xs mb-2">{product.title}</h2>
        <span className="text-2xl mb-2 font-bold flex-1 flex items-center">{`$ ${product.price}`}</span>
        <button className="btn-primary w-full">COMPRAR</button>
      </div>
    </li>
  );
};
