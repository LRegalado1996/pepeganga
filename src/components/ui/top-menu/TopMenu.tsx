import Link from "next/link";

import { getCategoriesHeader } from "@/actions";
import { logoFont } from "@/config/fonts";
import { MenuButton } from "./MenuButton";
import { CartButton } from "./CartButton";

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
          <CartButton />

          <MenuButton />
        </div>
      </nav>
    </header>
  );
};
