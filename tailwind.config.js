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
				practiceBg: {
					light: '#edf0f7',
					dark: '#334a67b3',
				},
			},
			spacing: {
				hp: '100%',
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
