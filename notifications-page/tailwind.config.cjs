/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'fe-red': 'hsl(1, 90%, 64%)',
        'fe-blue': 'hsl(219, 85%, 26%)',
        'fe-white': 'hsl(0, 0%, 100%)',
        'fe-very-light-grayish-blue': 'hsl(210, 60%, 98%)',
        'fe-light-grayish-blue-1': 'hsl(211, 68%, 94%)',
        'fe-light-grayish-blue-2': 'hsl(205, 33%, 90%)',
        'fe-grayish-blue': 'hsl(219, 14%, 63%)',
        'fe-dark-grayish-blue': 'hsl(219, 12%, 42%)',
        'fe-very-dark-blue': 'hsl(224, 21%, 14%)'
      }
    },
  },
  plugins: [],
}
