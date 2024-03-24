/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      animation: {
        wiggle: 'wiggle 1s ease-in-out infinite',
        opacity: 'opacity 1s ease-in-out'
      },
      keyframes: {
        opacity: {
          '0%': {opacity: '0%'},
          '100%': {opacity: '100%'}
      },
      wiggle: {
        '0%, 100%': { transform: 'rotate(-3deg)' },
        '50%': { transform: 'rotate(3deg)' },
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
}
}

