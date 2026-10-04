/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // 'caveat' ki jagah aap apne font ka naam likh sakte hain jo Google Fonts se liya ho
        customFont: ['Caveat', 'cursive', 'sans-serif'], 
      },
    },
  },
  plugins: [],
}