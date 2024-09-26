/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {fontFamily: {
      inter: ['Inter', 'sans-serif'],
    },
    boxShadow: {
      'bottom-darker': '0 4px 10px rgba(0, 0, 0, 0.3)', // Custom bottom shadow
    },
  },
  },
  plugins: [],
}