/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
  //colors: {
    //darkbrown: '#5b4f47',
   // daksand: '#c9b7a9',
   // sand: '#d6c4b5',
   // lightsand: '#e2d3bf',
   // brown: '#997c54',
    //rose: '#fec4d2'
   // },

    extend: {
      animation: {
        wiggle: 'wiggle 1s ease-in-out infinite',
        opacity: 'opacity 1s ease-in-out'
      },
      keyframes: {
        opacity: {
          '0%': {
            opacity: '0%',
            transform: 'translateY(50px)'

        },
          '100%': {
            opacity: '100%',
            transform: 'translateY(0)'
          }
      },
      wiggle: {
        '0%, 100%': { transform: '' },
        '50%': { transform: 'rotate(3deg)' },
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
}
}

