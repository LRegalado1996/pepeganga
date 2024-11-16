"use client";

import Link from "next/link";
import { IoCartOutline } from "react-icons/io5";

import { mainFont } from "@/config/fonts";
import { useUIStore } from "@/store";

export const TopMenu = () => {
  const openSideMenu = useUIStore((state) => state.openSideMenu);

  return (
    <nav className="flex px-5 lg:px-10  py-3 justify-between items-center w-full bg-olive text-charcoal">
      {/* Logo */}
      <Link className="flex items-center" href="/">
        <span className={`${mainFont.className} antialiased text-xl pr-1`}>Pepe</span>
        <span>| shop</span>
      </Link>

      {/* Main categories */}
      <Link href="/category" className="hidden sm:block">
        Categorías
      </Link>

      {/* Search, cart, menu */}
      <div className="flex items-center">
        <Link href="/cart" className="mx-4">
          <div className="relative">
            <span className="fade-in absolute text-xs rounded-full px-1 font-bold -top-2 -right-2 bg-ivory text-forestGreen">
              2
            </span>

            <IoCartOutline className="w-5 h-5" />
          </div>
        </Link>

        <button className="transition-all hover:underline" onClick={() => openSideMenu()}>
          Menu
        </button>
      </div>
    </nav>
  );
};
