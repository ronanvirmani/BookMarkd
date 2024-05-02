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
      backgroundImage: theme => ({
        'login-background': "url('https://images.unsplash.com/photo-1577985051167-0d49eec21977?q=80&w=2978&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
      }),
    },
  },
  plugins: [],
}