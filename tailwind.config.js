/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.html",
    "./assets/**/*.js",
    "./script.js"
  ],
  theme: {
    extend: {
      colors: {
        'brand-dark': '#1b1e24',
        'brand-purple': '#454dcc',
        'brand-beige': '#f1e8de',
        'brand-beige-dark': '#ccc4ba',
        'brand-beige-light': '#e7dccf',
        'neutral-300': '#cbd5e1',
        'purple-50': '#dddff9',
        'dark-bg': '#0d0f15',
      },
      fontFamily: {
        'futura': ['Futura PT', 'Arial', 'sans-serif'],
        'nunito': ['Nunito Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

