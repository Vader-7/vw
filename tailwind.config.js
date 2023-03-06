const { fontFamily } = require("tailwindcss/defaultTheme")
/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  future: {
    hoverOnlyWhenSupported: true,
  },
  important: true,
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '2rem',
        sm: '7rem',
        lg: '12rem',
        xl: '17rem',
        '2xl': '20rem',
      },
    },
    extend: {
      fontFamily: {
        inter: ['var(--font-inter)', ...fontFamily.sans],
        sfPro: '"SF Pro Display",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen,Ubuntu, Cantarell,"Open Sans","Helvetica Neue",sans-serif',
        mono: '"SF Mono", -apple-system, BlinkMacSystemFont, "Mono", "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif',
      },
      transitionDuration: {
        '0': '0ms',
        '2000': '2000ms',
        '3000': '3000ms',
      },
      boxShadow: {
        '3xl': '0px 10px 38px -10px rgba(22, 23, 24, 0.35), 0px 10px 20px -15px rgba(22, 23, 24, 0.2)',
        '3xl-dark': '0 8px 24px rgba(255, 255, 255, 0.9);',
      },
    },
  },
  plugins: [],
}