import { mainFont } from "@/config/fonts";

import Link from "next/link";
import React from "react";

export const PageNotFound = () => {
  return (
    <div className="flex h-[500px] w-full justify-center items-center">
      <div className="text-center px-5 mx-5">
        <h2 className={`${mainFont.className} antialiased text-9xl`}>404</h2>
        <p className="font-semibold text-xl">Whoops! Lo sentimos mucho.</p>
        <p className="font-light">
          <span>Puedes regresar al </span>
          <Link className="font-normal hover:underline transition-all" href="/">
            Inicio
          </Link>
        </p>
      </div>
    </div>
  );
};
