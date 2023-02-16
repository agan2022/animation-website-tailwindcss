/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    fontFamily: {
      'Poppins' : ['Poppins']
    },
    screens: {
      sm: '440px',
      md: '1100px'
    },
    extend: {
      colors: {
        'softWhite': '#fff'
      },
      backgroundColor: {
        'softBlack': 'rgb(24, 24, 24)'
      },
      height: {
        vh110: '110vh'
      },
      zIndex: {
        '-1': '-1',
        2: '2'
      },
      spacing: {
        '-1/2' : '-50% -50%'
      }
    },
  },
  plugins: [],
}
