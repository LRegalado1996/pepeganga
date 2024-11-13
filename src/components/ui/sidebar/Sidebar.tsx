"use client";

import clsx from "clsx";
import Link from "next/link";

// import { logout } from "@/actions";
import { useUIStore } from "@/store";

import {
  IoCloseOutline,
  IoDiamondOutline,
  IoLogInOutline,
  IoLogOut,
  IoPersonOutline,
  IoSearchOutline,
  IoTicketOutline,
} from "react-icons/io5";

export const Sidebar = () => {
  const isSideMenuOpen = useUIStore((state) => state.isSideMenuOpen);
  const closeSideMenu = useUIStore((state) => state.closeSideMenu);

  return (
    <div className="">
      {/* black background */}
      {isSideMenuOpen && (
        <div className="fixed top-0 left-0 w-screen h-screen z-10 bg-charcoal opacity-30" />
      )}

      {/* Blur */}
      {isSideMenuOpen && (
        <div
          onClick={closeSideMenu}
          className="fade-in fixed top-0 left-0 w-screen h-screen z-10 backdrop-filter backdrop-blur-sm"
        />
      )}

      <nav
        className={clsx(
          "fixed p-5 right-0 top-0 w-full sm:w-[500px] h-screen bg-white z-20 shadow-2xl transform transition-all duration-300",
          {
            "translate-x-full": !isSideMenuOpen,
          }
        )}
      >
        <IoCloseOutline
          size={50}
          className="absolute top-5 right-5 cursor-pointer"
          onClick={() => closeSideMenu()}
        />

        {/* Input */}
        <div className="relative mt-14">
          <IoSearchOutline size={20} className="absolute top-2 left-2" />
          <input
            type="text"
            placeholder="Buscar"
            className="w-full bg-gray-50 rounded pl-10 py-1 pr-10 border-b-2 text-xl border-charcoal focus:outline-none focus:border-olive"
          />

          {/* Category */}
          <Link
            href="/category"
            onClick={() => closeSideMenu()}
            className="flex items-center mt-10 p-2 hover:text-olive rounded transition-all border-b-2 pb-10"
          >
            <IoDiamondOutline size={30} />
            <span className="ml-3 text-xl">Categorías</span>
          </Link>

          {/* Menu */}
          <Link
            href="/profile"
            onClick={() => closeSideMenu()}
            className="flex items-center mt-10 p-2 hover:text-olive rounded transition-all"
          >
            <IoPersonOutline size={30} />
            <span className="ml-3 text-xl">Perfil</span>
          </Link>

          <Link
            href="/orders"
            onClick={() => closeSideMenu()}
            className="flex items-center mt-10 p-2 hover:text-olive rounded transition-all"
          >
            <IoTicketOutline size={30} />
            <span className="ml-3 text-xl">Ordenes</span>
          </Link>

          <Link
            href={"/login"}
            onClick={() => closeSideMenu()}
            className="flex items-center mt-10 p-2 hover:text-olive rounded transition-all"
          >
            <IoLogInOutline size={30} />
            <span className="ml-3 text-xl">Ingresar</span>
          </Link>

          <button
            className="flex items-center w-full mt-10 p-2 hover:text-olive rounded transition-all"
            // onClick={() => logout()}
          >
            <IoLogOut size={30} />
            <span className="ml-3 text-xl">Salir</span>
          </button>
        </div>
      </nav>
    </div>
  );
};
