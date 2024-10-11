/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["remote/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {},
  },
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

