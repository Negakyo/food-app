/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./screens/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: '#3F3C73',
        secondary: '#13600D',
        light: '#F7F7F9',
        grey: '#E6E9F0'
      },
    },
  },
  plugins: [],
}

