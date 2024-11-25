import { Title } from "@/components";
import Link from "next/link";

export default function newAccountPage() {
  return (
    <div className="flex flex-col justify-center items-center flex-1">
      <Title name={"Regístrate"} />

      <div className="flex flex-col min-w-80">
        <label htmlFor="name">Nombre completo</label>
        <input className="px-5 py-2 border bg-gray-200 rounded mb-5" type="text" required />

        <label htmlFor="email">Correo electrónico</label>
        <input className="px-5 py-2 border bg-gray-200 rounded mb-5" type="email" required />

        <label htmlFor="phone">Teléfono</label>
        <input
          className="px-5 py-2 border bg-gray-200 rounded mb-5"
          type="text"
          required
          maxLength={9}
          minLength={9}
        />

        <label htmlFor="password">Contraseña</label>
        <input className="px-5 py-2 border bg-gray-200 rounded mb-5" type="password" required />

        <button className="btn-primary">Crear cuenta</button>

        {/* divisor l ine */}
        <div className="flex items-center my-5">
          <div className="flex-1 border-t border-gray-500"></div>
          <div className="px-2 text-gray-800">O</div>
          <div className="flex-1 border-t border-gray-500"></div>
        </div>

        <Link href="/auth/login" className="btn-secondary text-center">
          Ingresar
        </Link>
      </div>
    </div>
  );
}
