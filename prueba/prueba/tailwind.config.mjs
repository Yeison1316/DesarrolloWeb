/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			animation: {
				'move-x': 'move-x 8s infinite ease-in-out',
			},
			keyframes: {
				'move-x': {
					'0%': { transform: 'translateX(0) scale(1) rotate(0deg)' },
					'50%': { transform: 'translateX(1800px) scale(0.001) rotate(20deg)' },
					'100%': { transform: 'translateX(0) scale(1) rotate(360deg)' }
				}
			},
		},
	},
	plugins: [],
}
