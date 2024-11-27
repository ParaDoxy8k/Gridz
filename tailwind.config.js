import containerQueries from '@tailwindcss/container-queries';
import forms from '@tailwindcss/forms';
import typography from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			colors: {
				transparent: 'transparent',
				current: 'currentColor',
				'white': '#ffffff',
				'purple': '#3f3cbb',
				'midnight': '#121063',
				'metal': '#565584',
				'tahiti': '#3ab7bf',
				'silver': '#ecebff',
				'bubble-gum': '#ff77e9',
				'bermuda': '#78dcca',
				'dark-cyan': '#039be5',
				'retro' : '#ece3ca',
			  },
		}
	},

	plugins: [typography, forms, containerQueries]
};
