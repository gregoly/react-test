/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "sea-green": '#00FFC4',
        'green-1': '#11283a',
        'green-2': '#122d40'
      },
      fontFamily: {
        'sans': ['ProximaNova', 'ui-sans-serif', 'system-ui'],
      }
    },
  },
  plugins: [],
}
