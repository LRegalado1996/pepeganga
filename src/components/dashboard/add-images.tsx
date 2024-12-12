"use client";

import { ProductImage } from "@prisma/client";
import Image from "next/image";
import { IoAdd, IoClose } from "react-icons/io5";

interface Props {
  onChange: (tags: ProductImage[]) => void;
  value: ProductImage[];
}

export const AddImages = ({ onChange, value }: Props) => {
  const handleOnInputChange = (event: React.ChangeEvent<HTMLInputElement>, id: string) => {
    const allValues = value.map((image) => {
      if (id === image.id) return { ...image, alt: event.target.value };

      return image;
    });

    onChange(allValues);
  };

  const removeImage = (event: React.MouseEvent<HTMLButtonElement>, imageId: string) => {
    event.preventDefault();
    const newImages = value?.filter((image) => image.id !== imageId) ?? [];

    onChange(newImages);
  };

  return (
    <ul className="flex flex-wrap gap-4 p-2 bg-gray-50 rounded">
      <li>
        <input className="hidden" type="file" multiple name="images" id="images" accept="image/*" />
        <label
          htmlFor="images"
          className="flex flex-col gap-2 w-[150px] h-[150px] p-2 border border-dashed border-forestGreen items-center justify-center text-center cursor-pointer hover:bg-forestGreen hover:text-white rounded"
        >
          <IoAdd size="5rem" />
          <span className="text-xs uppercase">Agregar imagenes</span>
        </label>
      </li>

      {value.map((image, i) => (
        <li
          key={image.id}
          className="p-2 flex flex-col w-[150px] h-[150px] justify-between items-center border border-forestGreen relative bg-white"
        >
          <Image src={image.url} alt={image.alt} width={100} height={100} />
          <input
            type="text"
            value={image.alt}
            onChange={(e) => handleOnInputChange(e, image.id)}
            name={image.id}
            className="text-xs w-full p-1 border"
          />
          <button
            aria-label="Borrar imagen"
            className="absolute top-1 right-1 text-red-500 hover:text-red-900"
            onClick={(e) => removeImage(e, image.id)}
          >
            <IoClose />
          </button>
        </li>
      ))}
    </ul>
  );
};
