"use client";

import { redirect } from "next/navigation";

export const CreateOrderButton = () => {
  const createOrder = async () => {
    console.log(createOrder);

    redirect("/orders");
  };

  return (
    <button
      onClick={() => createOrder()}
      className="flex btn-primary justify-center mt-5 mb-2 w-full"
    >
      COMPRAR
    </button>
  );
};
