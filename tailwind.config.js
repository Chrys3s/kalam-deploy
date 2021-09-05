module.exports = {
	purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
	darkMode: 'class',
	theme: {
		extend: {
			colors: {
				customN: {
					light: '#bcccdc',
					dark: '#486581',
				},
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
