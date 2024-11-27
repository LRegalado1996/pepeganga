"use client";

import { SubmitHandler, useForm } from "react-hook-form";
import clsx from "clsx";
import Link from "next/link";

import { login, registerUser } from "@/actions";
import { useState } from "react";

type FormInputs = {
  name: string;
  email: string;
  phone: string;
  password: string;
};

export const RegisterForm = () => {
  const [errorMessage, setErrorMessage] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<FormInputs>();

  const onSubmit: SubmitHandler<FormInputs> = async (data) => {
    setErrorMessage("");
    const { name, email, phone, password } = data;

    const resp = await registerUser({ name, email, phone, password });

    if (!resp.ok) {
      if (resp.type === "email") {
        setError("email", { message: resp.message });
      } else {
        setErrorMessage(resp.message);
      }

      return;
    }

    await login(email.toLowerCase(), password);

    window.location.replace("/");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col min-w-80">
      <label htmlFor="name">Nombre completo</label>
      <input
        className={clsx("px-5 py-2 border bg-gray-200 rounded mb-5", {
          "border-red-500": !!errors.name,
        })}
        type="text"
        autoFocus
        {...register("name", { required: true })}
      />

      <label htmlFor="email">Correo electrónico</label>
      <div className="mb-5 flex flex-col">
        <input
          className={clsx("px-5 py-2 border bg-gray-200 rounded", {
            "border-red-500": !!errors.email,
          })}
          type="email"
          required
          {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
        />

        {!!errors.email && <span className="text-xs text-red-500">{errors.email.message}</span>}
      </div>

      <label htmlFor="phone">Teléfono</label>
      <div className="mb-5 flex flex-col">
        <input
          className={clsx("px-5 py-2 border bg-gray-200 rounded", {
            "border-red-500": !!errors.phone,
          })}
          type="text"
          maxLength={9}
          {...register("phone", {
            required: true,
            minLength: 9,
            maxLength: 9,
            pattern: /^09\d{7}$/i,
          })}
        />

        {!!errors.phone && (
          <span className="text-xs text-red-500">Teléfono incorrecto. Ej: 091234567</span>
        )}
      </div>

      <label htmlFor="password">Contraseña</label>
      <input
        className={clsx("px-5 py-2 border bg-gray-200 rounded mb-5", {
          "border-red-500": !!errors.password,
        })}
        type="password"
        minLength={6}
        {...register("password", { required: true, minLength: 6 })}
      />

      {errorMessage && <span className="text-xs text-red-500 mb-5">{errorMessage}</span>}

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
    </form>
  );
};
