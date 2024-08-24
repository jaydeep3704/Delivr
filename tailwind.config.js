/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}",
  ],
  theme: {
      screens: {
        'sm': '480px',   // Custom small breakpoint
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1440px', // Custom extra extra large breakpoint
      },
    
    extend: {
      fontFamily:{
        poppins: ['Poppins', 'sans-serif'],
        roboto:['Roboto','sans-serif']
      },
    },
  },
  plugins: [],
}

