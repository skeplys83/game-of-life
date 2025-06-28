/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        'xsm': '30rem',
        'sh': { 'raw': '(max-height: 40rem)' },
      }
    },
  },
  plugins: [],
}

