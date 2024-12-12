"use server";

import { signIn } from "@/auth.config";
import { AuthError } from "next-auth";

export async function authenticate(prevState: string | undefined, formData: FormData) {
  try {
    await signIn("credentials", formData);
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin":
          return "Credenciales inválidas.";
        default:
          return "Algo salió mal. ¡Vuelva más tarde!";
      }
    }
    throw error;
  }
}

export const login = async (email: string, password: string) => {
  try {
    await signIn("credentials", { email, password });

    return { ok: true };
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin":
          return "Credenciales inválidas.";
        default:
          return "Algo salió mal. ¡Vuelva más tarde!";
      }
    }

    return {
      ok: false,
      message: "No se pudo iniciar sesión",
    };
  }
};
