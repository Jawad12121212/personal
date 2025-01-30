/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        Saans: 'Saans',
        Mono: 'Mono',
        Switzer: 'Switzer',
        Gilroy: 'Gilroy'
      },
      animation: {
        spin: 'spin 1s linear infinite',
        'spin-slow': 'spin 1s linear infinite reverse',
      },
    },
  },
  plugins: [],
};
