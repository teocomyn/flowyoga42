import { Alegreya, Inter_Tight } from "next/font/google";

export const alegreya = Alegreya({
  subsets: ["latin"],
  variable: "--font-alegreya",
  display: "swap",
  weight: ["400", "500", "700"],
});

export const interTight = Inter_Tight({
  subsets: ["latin"],
  variable: "--font-inter-tight",
  display: "swap",
});

/** @deprecated Use `alegreya` — kept for gradual migration */
export const fraunces = alegreya;
