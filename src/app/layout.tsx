import type { Metadata } from "next";
import { inter } from "@/config/fonts";

import "./globals.css";
import { TopMenu } from "@/components";

export const metadata: Metadata = {
  title: {
    template: "%s - Pepe | Shop",
    default:
      "Pepe | shop: Bijouterie Moderna y Elegante en Uruguay | Collares, Pulseras, Anillos y Más",
  },
  description:
    "Descubre bijouterie moderna y elegante en Pepe | shop. Encuentra collares, anillos, pulseras y lentes de sol perfectos para regalar en Navidad, Reyes o para estrenar en Año Nuevo. Envíos en Uruguay.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es_UY">
      <body className={`${inter.className} antialiased`}>
        <TopMenu />
        {children}
      </body>
    </html>
  );
}
