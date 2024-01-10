module.exports = {
  purge: ["./index.html",
  "./src/**/*.{vue,js,ts,jsx,tsx}",],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
    },
    fontFamily: {
      body: ' Montserrat, Varino',
      heading:
        'Montserrat,Varino',
      sans: 'Montserrat, Varino',
      serif: 'Montserrat, Varino ',
      mono: 'Varino',

    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
