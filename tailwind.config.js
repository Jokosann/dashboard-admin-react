/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				'blue-light': '#2D60FF',
				'blue-dark': '#343C6A',
				'yellow-dark': '#FEAA09',
				'pink-dark': '#FE5C73',
				'background-dash': '#f5f7fa',
			},
		},
	},
	plugins: [],
};
