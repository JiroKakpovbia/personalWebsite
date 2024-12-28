/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    fontFamily: {
      sans: ['Gotham', 'Graphik', 'Helvetica'],
      serif: ['Georgia', 'Cambria'],
    },
    extend: {
      keyframes: {
        slideInLeft: {
          '0%': { transform: 'translateX(-100%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        slideInRight: {
          '0%': { transform: 'translateX(100%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        slideInUp: {
          '0%': { transform: 'translateY(100%)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideInDown: {
          '0%': { transform: 'translateY(-100%)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
      animation: {
        slideInLeft: 'slideInLeft 1s ease-in-out',
        slideInRight: 'slideInRight 1s ease-in-out',
        slideInUp: 'slideInUp 1s ease-in-out',
        slideInDown: 'slideInDown 1s ease-in-out',
      },
    },
  },
  plugins: [],
}

