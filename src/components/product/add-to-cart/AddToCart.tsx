"use client";

import type { CartProduct, ProductInterface } from "@/interfaces";
import { useCartStore } from "@/store";
import { IoCartOutline } from "react-icons/io5";

interface Props {
  product: ProductInterface;
}

export const AddToCart = ({ product }: Props) => {
  const cart = useCartStore((state) => state.cart);
  const addProductTocart = useCartStore((state) => state.addProductTocart);
  const updateProductQuantity = useCartStore((state) => state.updateProductQuantity);

  const productCart = cart.find((p) => p.id === product.id);

  const productFormat: CartProduct = {
    id: product.id,
    slug: product.slug,
    title: product.title,
    price: product.price,
    quantity: productCart?.quantity ?? 1,
    image: product.ProductImage.length > 0 ? product.ProductImage[0].url : "",
  };

  return (
    <div className="flex items-center flex-1">
      {productCart && productCart.quantity > 0 ? (
        <>
          <button
            onClick={() => updateProductQuantity(productFormat, productCart.quantity - 1)}
            className="btn-primary flex items-center justify-center flex-1"
            aria-label="Agregar al carrito"
            disabled={productCart.quantity <= 0}
          >
            - <IoCartOutline />
          </button>
          <span className="text-center flex-1">{productCart.quantity}</span>
          <button
            onClick={() => updateProductQuantity(productFormat, productCart.quantity + 1)}
            className="btn-primary flex items-center justify-center flex-1"
            aria-label="Agregar al carrito"
            disabled={productCart.quantity >= product.stock}
          >
            + <IoCartOutline />
          </button>
        </>
      ) : (
        <button
          onClick={() => addProductTocart(productFormat)}
          className="btn-primary flex items-center justify-center text-xs flex-1"
          aria-label="Agregar al carrito"
          disabled={product.stock === 0}
        >
          COMPRAR
        </button>
      )}
    </div>
  );
};
