import { Inter } from "next/font/google";
import localFont from "next/font/local";

export const inter = Inter({ subsets: ["latin"] });

export const mainFont = localFont({
  src: "./fonts/Barrio-Regular.ttf",
  variable: "--font-geist-sans",
  weight: "100 900",
});
