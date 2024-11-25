"use client";

import { useActionState } from "react";
import Link from "next/link";
import { IoReloadCircle, IoWarning } from "react-icons/io5";

import { authenticate } from "@/actions";

export const LoginForm = () => {
  const [errorMessage, formAction, isPending] = useActionState(authenticate, undefined);

  return (
    <form action={formAction} className="flex flex-col min-w-80">
      <label htmlFor="email">Correo electrónico</label>
      <input
        className="px-5 py-2 border bg-gray-200 rounded mb-5"
        type="email"
        name="email"
        required
      />

      <label htmlFor="password">Contraseña</label>
      <input
        className="px-5 py-2 border bg-gray-200 rounded mb-5"
        type="password"
        name="password"
        required
      />

      <button type="submit" className="btn-primary" disabled={isPending}>
        {isPending ? <IoReloadCircle className="animate-spin" /> : "Ingresar"}
      </button>

      {errorMessage && (
        <div className="text-red-500 flex justify-center items-center pt-4">
          <IoWarning className="mr-1" />
          <p className="text-sm">{errorMessage}</p>
        </div>
      )}

      {/* divisor l ine */}
      <div className="flex items-center my-5">
        <div className="flex-1 border-t border-gray-500"></div>
        <div className="px-2 text-gray-800">O</div>
        <div className="flex-1 border-t border-gray-500"></div>
      </div>

      <Link href="/auth/new-account" className="btn-secondary text-center">
        Crear una nueva cuenta
      </Link>
    </form>
  );
};
