import type { Config } from "tailwindcss";
import { shadcnPlugin } from "../plugin/shadcn-plugin";
import animatePlugin from "tailwindcss-animate";

export const shadcnPreset = {
  darkMode: ["class"],
	content: ["**.{ts,tsx, js, jsx}"],
  plugins: [shadcnPlugin, animatePlugin]
} satisfies Config;
