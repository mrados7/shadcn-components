import type { Config } from "tailwindcss";
import { shadcnPreset } from "./src/tailwind/preset/shadcn-preset";

/** @type {import('tailwindcss').Config} */
const config = {
	presets: [shadcnPreset],
	content: ["./src/**/*.{ts,tsx}"],
	
} satisfies Config;

export default config;
