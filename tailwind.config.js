/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{html,js}",
  ],
  theme: {
    
    extend: {
      screens: {
        //  for tablet
          'md': {'min': '767px','max': '1023px'},
          // for laptop and desktop
          'lg': {'min': '1024px'},
          'xl': {'min':'1440px'},
    
        },
        colors: {
          'primary': '#00303F',
          'secondery': '#F0F3F4',
          'thirdly': '#00B67A',
        },
      fontFamily: {    
        inter : ['"Inter"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}