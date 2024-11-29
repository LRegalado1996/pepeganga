import { auth } from "@/auth.config";
import Link from "next/link";
import { redirect } from "next/navigation";
import { IoHomeOutline } from "react-icons/io5";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth();

  if (session?.user?.role !== "admin") {
    redirect("/");
  }
  return (
    <div className="flex-1">
      <ul>
        <li>
          <Link href="/dashboard" aria-label="Volver al menu del dashboard">
            <IoHomeOutline />
          </Link>
        </li>
        <li>
          <Link href="/dashboard/products">Productos</Link>
        </li>
        <li>
          <Link href="/dashboard/orders">Pedidos</Link>
        </li>
        <li>
          <Link href="/dashboard/users">Usuarios</Link>
        </li>
      </ul>
      {children}
    </div>
  );
}
