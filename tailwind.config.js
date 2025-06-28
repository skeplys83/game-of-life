/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        'xs': '480px',
        'short': { 'raw': '(max-height: 600px)' },
      }
    },
  },
  plugins: [],
}

