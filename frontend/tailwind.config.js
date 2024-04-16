/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'white': '#ffffff',
        'beige' : '#F5F5DC',
        'green' : '#808000',
        'brown' : '#420808'
      },
    },
  },
  plugins: [],
}