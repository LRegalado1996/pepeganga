"use client";

import clsx from "clsx";
import Link from "next/link";
import { SubmitHandler, useForm } from "react-hook-form";

type FormInputs = {
  name: string;
  email: string;
  phone: string;
  password: string;
};

export const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInputs>();

  const onSubmit: SubmitHandler<FormInputs> = async (data) => {
    const { name, email, phone, password } = data;

    console.log({ name, email, phone, password });
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
      <input
        className={clsx("px-5 py-2 border bg-gray-200 rounded mb-5", {
          "border-red-500": !!errors.email,
        })}
        type="email"
        required
        {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
      />

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
        {!!errors.phone && <span className="text-xs text-red-500">Formato deseado 09XXXXXXX</span>}
      </div>

      <label htmlFor="password">Contraseña</label>
      <input
        className={clsx("px-5 py-2 border bg-gray-200 rounded mb-5", {
          "border-red-500": !!errors.password,
        })}
        type="password"
        {...register("password", { required: true })}
      />

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
