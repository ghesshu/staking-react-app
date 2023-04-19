/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'sm': '320px',
      'smd': '481px',
      'md': '600px',
      'slg': '760px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    
    extend: {},
  },
  plugins: [],
}
