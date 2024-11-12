import { mainFont } from "@/config/fonts";
import Link from "next/link";
import { IoCartOutline, IoSearchOutline } from "react-icons/io5";

export const TopMenu = () => {
  return (
    <nav className="flex px-2 sm:px-5  py-3 justify-between items-center w-full bg-olive text-charcoal">
      {/* Logo */}
      <Link className="flex items-center" href="/">
        <span className={`${mainFont.className} antialiased text-xl pr-1`}>Pepe</span>
        <span>| shop</span>
      </Link>

      {/* Main categories */}
      <div className="hidden sm:block">Categories</div>

      {/* Search, cart, menu */}
      <div className="flex items-center">
        <Link href="/search">
          <IoSearchOutline className="w-5 h-5" />
        </Link>

        <Link href="/cart" className="mx-4">
          <div className="relative">
            <span className="fade-in absolute text-xs rounded-full px-1 font-bold -top-2 -right-2 bg-ivory text-forestGreen">
              2
            </span>

            <IoCartOutline className="w-5 h-5" />
          </div>
        </Link>

        <button className="transition-all hover:underline">Menu</button>
      </div>
    </nav>
  );
};
