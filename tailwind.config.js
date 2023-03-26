/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'cinza': '#FFFFFF',
      },
      fontFamily: {
        poppins: ['Poppins']
      },
      fontWeight: {
        regular: 400,
        medium: 500,
        semibold: 600,
      },
      
    },

  },
  plugins: [],
}
