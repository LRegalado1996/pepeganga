import Link from "next/link";
import { IoCartOutline } from "react-icons/io5";

import { getCategoriesHeader } from "@/actions";
import { logoFont } from "@/config/fonts";
import { MenuButton } from "./MenuButton";

export const TopMenu = async () => {
  const categories = await getCategoriesHeader();

  return (
    <header className="flex justify-center bg-olive">
      <nav className="flex px-5 lg:px-10 py-3 justify-between items-center w-full text-charcoal max-w-[1600px]">
        {/* Logo */}
        <Link className="flex items-center" href="/">
          <h1>
            <span className={`${logoFont.className} antialiased text-xl pr-1`}>Pepe</span>
            <span>| shop</span>
          </h1>
        </Link>

        {/* Main categories */}
        <ul className="hidden sm:flex gap-4">
          {categories.map((category) => (
            <Link key={category.id} href={category.slug} className="hover:text-white">
              {category.name}
            </Link>
          ))}
        </ul>

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

          <MenuButton />
        </div>
      </nav>
    </header>
  );
};
