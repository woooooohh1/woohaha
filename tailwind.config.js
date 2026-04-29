/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",                 // root index.html
    "./src/**/*.{js,jsx,ts,tsx}",  // src 내부 모든 JS, JSX, TS, TSX 파일
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
