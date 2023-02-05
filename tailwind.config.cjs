/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {},
    fontFamily: {
      'mono': ['JetBrains Mono'],
      'sans': ['Fira Sans'],
      'pt-serif': ['PT Serif'],
      'canela-serif': ['Canela Deck']
    },
    backgroundImage: {
    }
  },
  plugins: [require("tailwind-gradient-mask-image")]
}
