import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: {
          DEFAULT: "#1a3a6b",
          light: "#2456a4",
          dark: "#0f2347",
        },
        accent: {
          DEFAULT: "#2b9f4a",
          light: "#3abf5c",
        },
        gold: {
          DEFAULT: "#e8a820",
          light: "#f5c842",
        },
        gray: {
          50: "#f8fafc",
          100: "#f1f5f9",
          200: "#e2e8f0",
          400: "#94a3b8",
          600: "#475569",
          800: "#1e293b",
        },
      },
    },
  },
  plugins: [],
}
export default config
