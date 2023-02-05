/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {},
    fontFamily: {
      'mono': ['JetBrains Mono']
    },
    backgroundImage: {
    }
  },
  plugins: [require("tailwind-gradient-mask-image")]
}
