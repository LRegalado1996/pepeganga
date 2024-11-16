"use client";

import { IoAdd, IoCartOutline } from "react-icons/io5";

interface Props {
  type?: "default";
  productId: string;
}

export const AddToCart = ({ productId, type = "default" }: Props) => {
  switch (type) {
    case "default":
      return (
        <button onClick={() => console.log({ productId, type })} className="btn-primary flex">
          <IoAdd />
          <IoCartOutline />
        </button>
      );
  }
};
