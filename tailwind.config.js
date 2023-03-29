/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,tsx,ts}"],
  theme: {
    extend: {},
    screens: {
      'sm': '370px',
      'md': '768px',
      'lg': '1024px'
    },

  },
  plugins: [],
}
