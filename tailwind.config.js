module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    fontFamily: {
      basic: ['BarlowSemiCondensed'],
      italic: ['BarlowSemiCondensedItalic'],
      bold: ['BarlowSemiCondensedBold'],
    },
    backgroundSize: {
      auto: 'auto',
      cover: 'cover',
      contain: 'contain',
      '100%': '100% 100%',
    },
    extend: {
      backgroundImage: {
        'home-back': "url('/images/homeback.png')",
        'bottom-back': "url('/images/bottomback.png')",
      },
      colors: {
        'primary-color': '#bbc23e',
        'secondary-color': '#4c651a',
        'third-color': '#306980',
        'fourth-color': '#C7D8E2',
      },
    },
  },
  plugins: [],
}
