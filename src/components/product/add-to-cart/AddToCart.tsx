"use client";

import { ProductInterface } from "@/interfaces";
import { IoAdd, IoCartOutline } from "react-icons/io5";

interface Props {
  type?: "default";
  product: ProductInterface;
}

export const AddToCart = ({ product, type = "default" }: Props) => {
  switch (type) {
    case "default":
      return (
        <button
          onClick={() => console.log({ product, type })}
          className="btn-primary flex items-center"
          aria-label="Agregar al carrito"
        >
          <IoAdd />
          <IoCartOutline />
        </button>
      );
  }
};
