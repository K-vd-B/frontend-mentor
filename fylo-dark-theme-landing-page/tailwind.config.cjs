/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'fe-dark-blue-1': 'hsl(217, 28%, 15%)',
        'fe-dark-blue-2': 'hsl(217, 28%, 13%)',
        'fe-dark-blue-3': 'hsl(216, 53%, 9%)',
        'fe-dark-blue-4': 'hsl(219, 30%, 18%)',
        'fe-cyan': 'hsl(176, 68%, 64%)',
        'fe-blue': 'hsl(198, 60%, 50%)',
        'fe-red': 'hsl(0, 100%, 63%)',
      },
      fontFamily: {
        'raleway': ['Raleway'],
        'open-sans': ['"Open Sans"']
      }
    },
  },
  plugins: [],
}
