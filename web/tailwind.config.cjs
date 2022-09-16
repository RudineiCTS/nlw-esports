/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx',
    './index.html'
  ],
  theme: {
    extend: {
      fontFamily:{
       sans:['inter','sans-serif']
      },
      backgroundImage:{
        galaxy: "url('/background-galaxy.png')",
        'nlw-gradient':'linear-gradient(89.86deg, #9572FC 27.08%, #43E7AD 44.94%, #E1D55D 10.57%);',
        'game-gradient': 'linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.9) 67.08%);'
      }
    },
  },
  plugins: [],
}
