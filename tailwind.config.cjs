/** @type {import('tailwindcss').Config} */


module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'bg-gray':'	#17181c',
        'bg-coin':'hsla(230, 16%, 22%, 0.5);',
        'coin-price':'hsl(227, 13%, 73%);',
        'black-contact':'hsl(240, 5%, 8%);',
      },
    },
  },
  plugins: [],
}