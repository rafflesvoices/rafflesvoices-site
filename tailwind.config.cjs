/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				rvspecial: '#4c71b0',
			},
		},
		fontFamily: {
			mono: ['JetBrains Mono'],
			sans: ['Fira Sans'],
			pt: ['PT Serif'],
			canela: ['Canela Deck']
		},
	},
	plugins: [require("tailwind-gradient-mask-image")],
}
