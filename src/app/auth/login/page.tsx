import { Title } from "@/components";
import Link from "next/link";

export default function loginPage() {
  return (
    <div className="flex flex-col justify-center items-center flex-1">
      <Title name={"Ingresar"} />

      <div className="flex flex-col min-w-80">
        <label htmlFor="email">Correo electrónico</label>
        <input className="px-5 py-2 border bg-gray-200 rounded mb-5" type="email" required />

        <label htmlFor="email">Contraseña</label>
        <input className="px-5 py-2 border bg-gray-200 rounded mb-5" type="password" required />

        <button className="btn-primary">Ingresar</button>

        {/* divisor l ine */}
        <div className="flex items-center my-5">
          <div className="flex-1 border-t border-gray-500"></div>
          <div className="px-2 text-gray-800">O</div>
          <div className="flex-1 border-t border-gray-500"></div>
        </div>

        <Link href="/auth/new-account" className="btn-secondary text-center">
          Crear una nueva cuenta
        </Link>
      </div>
    </div>
  );
}