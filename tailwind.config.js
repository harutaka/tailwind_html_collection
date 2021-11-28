module.exports = {
  mode: "jit",
  purge: ["./src/**/*.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        meiryo: ["メイリオ"],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
