/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {
      spacing: {
        '26px': '26px',
      },
      colors: {
        cinza: {
          brancoClaro: '#FFFFFF',
        },
        azul: {
          marinho: '#476EE6',
        },
        cinza: {
          brancoEscuro: '#E5E5E5',
        },
        cinzaHover: {
          cinzaClaro: '#F7F9FB',
        },
        borda: {
          bordaCinzaClaro: '#D7D7D7',
        },
        title: {
          titleblack: '#101828',
        },
      },
      fontFamily: {
        poppins: ['Poppins'],
      },
      fontWeight: {
        regular: 400,
        medium: 500,
        semibold: 600,
      },
    },
  },
  plugins: [],
};
