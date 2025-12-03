/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./{App,index,constants,types}.tsx",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}