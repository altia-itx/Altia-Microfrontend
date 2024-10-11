/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html",],
  theme: {
    extend: {
      colors: {
        primary: '#E50914',
        secondary: '#000000',
        accent: '#B1B3B3',
        background: '#141414',
        white: '#FFFFFF',
        gray: {
          100: '#F3F3F3',
          200: '#E2E2E2',
          400: '#B8B8B8',
          600: '#7D7D7D',
        },
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      spacing: {
        128: '32rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
    },
  },
  plugins: [],
}


