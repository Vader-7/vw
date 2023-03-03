/** @type {import('tailwindcss').Config} */
module.exports = {
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
        inter: ['var(--font-inter)'],
        jetbrains: ['var(--font-jetbrains-mono)'],
        ibmMono: ['var(--font-ibm-plex-mono)'],
        ibmSans: ['var(--font-ibm-plex-sans)'],
      },
      boxShadow: {
        '3xl': '0px 10px 38px -10px rgba(22, 23, 24, 0.35), 0px 10px 20px -15px rgba(22, 23, 24, 0.2)',
        '3xl-dark': '0 8px 24px rgba(255, 255, 255, 0.9);',
      },
    },
  },
  plugins: [],
}