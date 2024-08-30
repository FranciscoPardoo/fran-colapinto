/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'celeste': '#5096FF',
        'blanco': '#D7D7D7',
      },
      height: {
        '100': '38rem',
      },
      width: {
        '97': '26rem',
        '98': '32rem',
        '99': '36rem',
        '100': '38rem',
      }
    },
    fontFamily: {
      montserrat: ['montserrat', 'sans-serif'],
    },
  },
  plugins: [],
}

