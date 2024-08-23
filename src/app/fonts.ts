import {
  Hanken_Grotesk,
} from "next/font/google";
import localFont from "next/font/local";

export const HankenGrotesk = Hanken_Grotesk({
  variable: "--font-hanken-grotesk",
  subsets: ["latin"],
  display: "swap",
  weight: ["400"],
});

export const ServerMono = localFont({
  src: [
    {
      path: "./fonts/ServerMono/ServerMono-Regular.woff2",
      style: "normal",
    },
    {
      path: "./fonts/ServerMono/ServerMono-Regular-Italic.woff2",
      style: "italic",
    },
  ],
  variable: "--font-servermono",
  display: "swap",
});

export const Queens = localFont({
  src: [
    {
      path: "./fonts/Queens/QueensVarTrial.ttf",
      style: "normal",
    },
    {
      path: "./fonts/Queens/QueensVarItalicTrial.ttf",
      style: "italic",
    },
  ],
  variable: "--font-queens",
  display: "swap",
  fallback: [
    "Didot, Baskerville, Georgia, Cambria, Times New Roman, Times, serif",
    "Didot, Baskerville, Georgia, Cambria, Times New Roman, Times, serif",
  ],
});
