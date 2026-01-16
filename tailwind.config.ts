import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'chaos-red': '#E11D48',
        'resilience-gold': '#F59E0B',
        'void-black': '#0F172A',
      },
      backgroundImage: {
        'chaos-gradient': 'linear-gradient(to bottom right, #0F172A, #1E1B4B)',
      },
      animation: {
        'scroll': 'scroll-left 20s linear infinite',
      }
    },
  },
  plugins: [],
};
export default config;
