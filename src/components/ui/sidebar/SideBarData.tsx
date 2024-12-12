"use client";

import Image from "next/image";
import type { Category } from "@prisma/client";
import type { Session } from "next-auth";

import clsx from "clsx";
import Link from "next/link";

import { logout } from "@/actions";
import { useUIStore } from "@/store";

import {
  IoCloseOutline,
  IoLogInOutline,
  IoLogOut,
  IoPersonOutline,
  IoSearchOutline,
  IoSettingsOutline,
  IoTicketOutline,
} from "react-icons/io5";

interface Props {
  categories: Category[];
  session: Session | null;
}

export const SideBarData = ({ categories, session }: Props) => {
  const isSideMenuOpen = useUIStore((state) => state.isSideMenuOpen);
  const closeSideMenu = useUIStore((state) => state.closeSideMenu);

  const isAuthenticated = !!session?.user;

  return (
    <div>
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
            className="w-full bg-gray-50 pl-10 py-1 pr-10 border-b text-xl border-forestGreen focus:outline-none focus:border-olive"
          />

          {/* Category */}
          <ul className="flex flex-col gap-1 border-b border-forestGreen my-10 pb-5">
            {categories.map((category) => (
              <li key={category.id}>
                <Link
                  href={category.slug}
                  onClick={() => closeSideMenu()}
                  className="flex items-center p-2 hover:text-olive transition-all"
                >
                  <Image
                    className="rounded-full mr-1"
                    src={category.image}
                    width={50}
                    height={50}
                    alt={`El nombre de la categoría es ${category.name}`}
                  />
                  <span className="ml-3 text-xl">{category.name}</span>
                </Link>
              </li>
            ))}
          </ul>

          {isAuthenticated && (
            <>
              {/* Menu */}
              <Link
                href="/profile"
                onClick={() => closeSideMenu()}
                className="flex items-center mt-5 p-2 hover:text-olive rounded transition-all"
              >
                <IoPersonOutline size={30} />
                <span className="ml-3 text-xl">Perfil</span>
              </Link>

              <Link
                href="/orders"
                onClick={() => closeSideMenu()}
                className="flex items-center mt-5 p-2 hover:text-olive rounded transition-all"
              >
                <IoTicketOutline size={30} />
                <span className="ml-3 text-xl">Mis pedidos</span>
              </Link>
            </>
          )}

          {session?.user?.role === "admin" && (
            <Link
              href={"/dashboard"}
              onClick={() => closeSideMenu()}
              className="flex items-center mt-5 p-2 hover:text-olive rounded transition-all"
            >
              <IoSettingsOutline size={30} />
              <span className="ml-3 text-xl">Configuraciones</span>
            </Link>
          )}

          {isAuthenticated ? (
            <button
              className="flex items-center w-full mt-5 p-2 hover:text-olive rounded transition-all"
              onClick={() => logout()}
            >
              <IoLogOut size={30} />
              <span className="ml-3 text-xl">Salir</span>
            </button>
          ) : (
            <Link
              href={"/auth/login"}
              onClick={() => closeSideMenu()}
              className="flex items-center mt-5 p-2 hover:text-olive rounded transition-all"
            >
              <IoLogInOutline size={30} />
              <span className="ml-3 text-xl">Ingresar</span>
            </Link>
          )}
        </div>
      </nav>
    </div>
  );
};
