/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'fe-dark-mode-elements': 'hsl(209, 23%, 22%)',
        'fe-dark-mode-bg': 'hsl(207, 26%, 17%)',
        'fe-dark-mode-text': ' hsl(0, 0%, 100%)',
        'fe-light-mode-text': 'hsl(200, 15%, 8%)',
        'fe-light-mode-input': 'hsl(0, 0%, 52%)',
        'fe-light-mode-bg': 'hsl(0, 0%, 98%)',
        'fe-light-mode-elements': 'hsl(0, 0%, 100%)',
      },
      fonts: {
        'fe-nunito-sans': ['"Nunito Sans"'],
      }
    },
  },
  plugins: [],
}
