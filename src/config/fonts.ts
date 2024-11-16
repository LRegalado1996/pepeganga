import { Montserrat, Montserrat_Alternates } from "next/font/google";
import localFont from "next/font/local";

export const inter = Montserrat({ subsets: ["latin"] });

export const mainFont = Montserrat_Alternates({ subsets: ["latin"], weight: ["500", "700"] });

export const logoFont = localFont({
  src: "./fonts/Barrio-Regular.ttf",
  variable: "--font-geist-sans",
  weight: "100 900",
});
