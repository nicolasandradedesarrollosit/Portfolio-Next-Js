import {heroui} from "@heroui/theme"

/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        mono: ["var(--font-mono)"],
      },
      colors: {
        'international-klein-blue': {
          '50': '#edf3ff',
          '100': '#ddeaff',
          '200': '#c2d7ff',
          '300': '#9ebbff',
          '400': '#7795ff',
          '500': '#576ffd',
          '600': '#3845f3',
          '700': '#2c36d6',
          '800': '#262fac',
          '900': '#273088',
          '950': '#171b4f',
        },
      },
    },
  },
  darkMode: "class",
  plugins: [heroui()],
}

module.exports = config;