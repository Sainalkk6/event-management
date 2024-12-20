import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primaryText:"#f84464"
      },
      fontFamily: {
        sans: ['"DM Sans"', 'sans-serif'],
        poppins: ['var(--font-poppins)'],
      },
      lineHeight:{
        loose: '19.2px',
      }
    },
  },
  plugins: [],
} satisfies Config;
