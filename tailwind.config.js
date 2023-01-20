/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/index.html'],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    fontSize: {
      'xl': '20px',
      'xxl': '63px',
      'sm': '18px'
    },
    fontFamily: {
      'body': ['"Open Sans"']
    },
    colors: {
      'green': '#E4F5EB',
      'grey-default': '#575859',
      'green-bt': '#45B871',
      'white': '#FFFFFF',
      'black-title': '#242323',
      'text-grey': '#6C6C6A'
    },
    fontWeight: {
      normal: 600,
      bold: 700,
      extrabold: 800,
    },
    extend: {
      padding: {
        '71': '71px',
        '40': '40px',
        '20': '20px',
        '22': '22px',
        '50': '50px'
      },
      lineHeight: {
        '15': '15px',
        '83px': '83px',
        '30px': '30px',
        '32px': '32px'
      }
    }
  },
  plugins: [],
}