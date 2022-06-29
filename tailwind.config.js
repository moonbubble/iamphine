/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    fontFamily: {
      sans: ['Nunito', 'sans-serif'],
    },
    extend: {
      screens: {
        '3xl':  '1792px'
      },
      fontFamily: {
        'vidaloka': ['"Vidaloka"', 'serif'],
        'caveat': ['"Caveat"', 'cursive'],
      }
    },
  },
  plugins: [],
}
