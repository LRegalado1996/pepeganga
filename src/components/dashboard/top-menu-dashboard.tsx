"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { IoHomeOutline } from "react-icons/io5";

export const TopMenuDashboard = () => {
  const pathname = usePathname();

  return (
    <div className="w-full flex justify-center">
      <ul className="flex items-center gap-3 sm:gap-5 bg-ivory w-fit mt-5 rounded-full overflow-hidden">
        <li className={pathname === "/dashboard" ? "bg-olive" : ""}>
          <Link className="flex p-3" href="/dashboard" aria-label="Volver al menu del dashboard">
            <IoHomeOutline />
          </Link>
        </li>
        <li className={pathname === "/dashboard/products" ? "bg-olive" : ""}>
          <Link className="flex p-3" href="/dashboard/products">
            Productos
          </Link>
        </li>
        <li className={pathname === "/dashboard/orders" ? "bg-olive" : ""}>
          <Link className="flex p-3" href="/dashboard/orders">
            Pedidos
          </Link>
        </li>
        <li className={pathname === "/dashboard/users" ? "bg-olive" : ""}>
          <Link className="flex p-3" href="/dashboard/users">
            Usuarios
          </Link>
        </li>
      </ul>
    </div>
  );
};
