"use client";

import { useEffect, useState } from "react";
import { redirect } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

import { useCartStore } from "@/store";
import { ProductInterface } from "@/interfaces";

import { AddToCart } from "@/components";
import { ProductByIds } from "@/actions";

export const ProductInCart = () => {
  const [products, setProducts] = useState<ProductInterface[]>([]);
  const [loaded, setLoaded] = useState(false);
  const productsInCart = useCartStore((state) => state.cart);
  const removeProduct = useCartStore((state) => state.removeProduct);
  const totalItemInCart = useCartStore((state) => state.getTotalNumber());

  useEffect(() => {
    setLoaded(true);
  }, []);

  useEffect(() => {
    if (totalItemInCart === 0) redirect("/");
  }, [totalItemInCart]);

  useEffect(() => {
    if (loaded) {
      const getProducts = async () => {
        const ids = productsInCart.map((p) => p.id);
        const newProducts = await ProductByIds(ids);
        setProducts(newProducts ?? []);
      };

      getProducts();
    }
  }, [productsInCart, loaded]);

  if (!loaded) {
    return <p>Loading...</p>;
  }

  return (
    loaded &&
    products.length > 0 && (
      <ul>
        {products.map((product) => (
          <li key={product.slug} className="flex mb-5 w-full">
            {product.ProductImage.length > 0 && (
              <Image
                src={product.ProductImage[0].url}
                alt={product.title}
                width={100}
                height={100}
                className="mr-5 rounded"
                style={{
                  width: "100px",
                  height: "100px",
                }}
              />
            )}

            <div className="flex flex-col flex-1 justify-between">
              <Link className="hover:underline cursor-pointer" href={`/product/${product.slug}`}>
                {product.title}
              </Link>
              <div className="flex items-center">
                <p className="w-[50%]">${product.price}</p>
                <AddToCart product={product} />
              </div>
              <button className="underline text-left" onClick={() => removeProduct(product)}>
                Remover
              </button>
            </div>
          </li>
        ))}
      </ul>
    )
  );
};
