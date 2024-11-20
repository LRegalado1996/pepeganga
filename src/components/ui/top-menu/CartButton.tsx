"use client";

import Link from "next/link";
import { IoCartOutline } from "react-icons/io5";

import { useCartStore } from "@/store";
import { useEffect, useState } from "react";

export const CartButton = () => {
  const totalItemInCart = useCartStore((state) => state.getTotalNumber());
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <Link href="/cart" className="mx-4">
      <div className="relative">
        {loaded && totalItemInCart > 0 && (
          <span className="min-w-4 fade-in absolute text-xs text-center rounded-full px-1 font-bold -top-2 -right-2 bg-forestGreen text-white">
            {totalItemInCart}
          </span>
        )}

        <IoCartOutline className="w-5 h-5" />
      </div>
    </Link>
  );
};
