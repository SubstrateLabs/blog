import { createPreset } from "fumadocs-ui/tailwind-plugin";
import type { Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

const config: Config = {
  content: [
    "./src/components/**/*.{ts,tsx}",
    "./src/app/**/*.{ts,tsx}",
    "./content/**/*.{md,mdx}",
    "./src/mdx-components.{ts,tsx}",
    "./node_modules/fumadocs-ui/dist/**/*.js",
  ],
  presets: [
    createPreset({
      preset: "neutral",
    }),
  ],
  darkMode: "class",
  theme: {
    fontFamily: {
      serif: ["var(--font-queens)", ...fontFamily.serif],
      sans: ["var(--font-hanken-grotesk)", ...fontFamily.sans],
      mono: ["var(--font-servermono)", ...fontFamily.mono],
    },
    extend: {},
  },
};
export default config;
