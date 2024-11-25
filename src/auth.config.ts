import NextAuth, { type NextAuthConfig } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { z } from "zod";
import bcryptjs from "bcryptjs";

import prisma from "./lib/prisma";

export const authConfig: NextAuthConfig = {
  pages: {
    signIn: "/auth/login",
    newUser: "/auth/new-account",
  },
  providers: [
    Credentials({
      async authorize(credentials) {
        const parsedCredentials = z
          .object({ email: z.string().email(), password: z.string().min(6) })
          .safeParse(credentials);

        console.log({ parsedCredentials });

        if (!parsedCredentials.success) return null;

        const { email, password } = parsedCredentials.data;
        const user = await prisma.user.findUnique({ where: { email: email.toLocaleLowerCase() } });

        if (!user) return null;

        const { password: passwordDB, ...rest } = user;

        if (!bcryptjs.compareSync(password, passwordDB)) return null;

        console.log({ user: rest });
        return rest;
      },
    }),
  ],
};

export const { signIn, signOut } = NextAuth(authConfig);