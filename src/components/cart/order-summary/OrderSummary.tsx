"use client";

import { useCartStore } from "@/store";
import { currencyFormat } from "@/utils";
import { useEffect, useState } from "react";

export const OrderSummary = () => {
  const [loaded, setLoaded] = useState(false);
  const summaryInformation = useCartStore((state) => state.getSummaryInformation);

  const { total, itemsInCart } = summaryInformation();

  useEffect(() => {
    setLoaded(true);
  }, []);

  if (!loaded) return <p>Loading..</p>;

  return (
    <div className="grid grid-cols-2">
      <span>Cantidad de artículos:</span>
      <span className="text-right">{itemsInCart}</span>

      <span className="mt-5 text-2xl">Total:</span>
      <span className="mt-5 text-2xl text-right">{currencyFormat(total)}</span>
    </div>
  );
};
