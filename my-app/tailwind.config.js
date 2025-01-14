/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      colors:{
        lime_green:'#b5e745',
        custom_black:'#0f1416'
      },
      backgroundImage:{
        'custom-gradient': 'linear-gradient(81.43deg, #b71c1c -26.81%, #8e1438 87.89%)',
      },
      fontFamily: {
        sans: ['Alata', 'sans-serif'], 
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide'),
  ],
}

