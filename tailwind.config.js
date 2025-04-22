module.exports = {
  purge: ["./index.html",
  "./src/**/*.{vue,js,ts,jsx,tsx}",],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        orangeVif: '#ff9900',
      },
    },
    fontFamily: {
      body: ' Montserrat, Varino',
      heading:
        'Montserrat,Varino',
      //sans: 'Montserrat, Varino',
      sans: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
      serif: 'Roboto ',
      //mono: 'Montserrat',
      mono: 'Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',

    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
