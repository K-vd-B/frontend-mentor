/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      'fe-white': '#fff',
      'fe-orange': 'hsl(25, 97%, 53%)',
      'fe-light-grey': 'hsl(217, 12%, 63%)',
      'fe-medium-grey': 'hsl(216, 12%, 54%)',
      'fe-dark-blue': 'hsl(213, 19%, 18%)',
      'fe-very-dark-blue': 'hsl(216, 12%, 8%)',
      'fe-gradient-dark': '#171e28',
      'fe-gradient-light': '#222933',
      'warning-red': '#6F1A07'
    },
    extend: {},
  },
  plugins: [],
}