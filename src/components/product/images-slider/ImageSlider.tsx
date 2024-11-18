import { ProductImage } from "@prisma/client";
import Image from "next/image";

interface Props {
  images: ProductImage[];
}

export const ImageSlider = ({ images }: Props) => {
  return (
    <ul className="flex flex-col w-full">
      {images.map((image) => (
        <li className="w-full" key={image.id}>
          <Image className="w-full" src={image.url} alt={image.alt} width={1000} height={1000} />
        </li>
      ))}
    </ul>
  );
};
