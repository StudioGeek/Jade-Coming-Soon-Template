/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		colors: {
			'primary': '#6960A6',
			'secondary': '#A38FBF',
			'semantic': '#F2F2F2',
			'neutral': '#595959',
			'dark': '#0D0D0D'
		},
		extend: {
			backgroundImage: {
				'rain-bg': 'url("/img/rains-background.jpeg")',
				'star-bg': 'url("/img/star-background.jpg")',
			}
		},
	},
	plugins: [],
}
