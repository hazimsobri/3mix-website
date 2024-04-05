/*
** TailwindCSS Configuration File
**
** Docs: https://tailwindcss.com/docs/configuration
** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
*/
module.exports = {
  mode: 'jit',
  theme: {
    extend: {
      fontFamily: {
        titil: ['titil', 'system-ui', 'sans-serif'],
        titilsemi:['titil-semi', 'system-ui', 'sans-serif'],
      },
    },
  },
  variants: {},
  plugins: [],
  purge: {
    content: [
      "./components/**/*.{js,vue,ts}",
      "./slices/**/*.vue",
      "./layouts/**/*.vue",
      "./pages/**/*.vue",
      "./plugins/**/*.{js,ts}",
      "./nuxt.config.{js,ts}",
    ]
  }
}
