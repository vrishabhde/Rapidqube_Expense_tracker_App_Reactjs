/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      height: {
        '100': '28rem',
        '110': '32rem',
        '120': '36rem',
        '130': '40rem',
        '140': '44rem',
        '150': '48rem',
        '160': '52rem',
        '170': '56rem',
        '180': '60rem',
        '190': '64rem',
        '200': '68rem',
      }
    },
  },
  plugins: [],
}

