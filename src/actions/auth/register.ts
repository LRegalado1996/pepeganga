"use server";

import prisma from "@/lib/prisma";
import { Prisma } from "@prisma/client";
import bcryptjs from "bcryptjs";

type RegisterType = {
  name: string;
  email: string;
  password: string;
  phone: string;
};

export const registerUser = async ({ name, email, password, phone }: RegisterType) => {
  try {
    const user = await prisma.user.create({
      data: {
        name,
        email: email.toLowerCase(),
        password: bcryptjs.hashSync(password),
        phone,
      },
      select: { id: true, name: true, email: true, phone: true },
    });

    return {
      ok: true,
      user,
      message: "User created successfully",
    };
  } catch (error) {
    let message = "";
    let type = null;

    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      switch (error.code) {
        case "P2002":
          message = "El correo electrónico ya está registrado";
          type = "email";
          break;

        default:
          message = "No se pudo crear el usuario";
          break;
      }
    }

    return {
      ok: false,
      message,
      type,
    };
  }
};
