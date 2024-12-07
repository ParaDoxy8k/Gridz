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
				primary: {"50":"#fffbeb","100":"#fef3c7","200":"#fde68a","300":"#fcd34d","400":"#fbbf24","500":"#f59e0b","600":"#d97706","700":"#b45309","800":"#92400e","900":"#78350f","950":"#451a03"}
			  },
			  fontFamily: {
				'body': [
			  'Nunito Sans', 
			  'ui-sans-serif', 
			  'system-ui', 
			  '-apple-system', 
			  'system-ui', 
			  'Segoe UI', 
			  'Roboto', 
			  'Helvetica Neue', 
			  'Arial', 
			  'Noto Sans', 
			  'sans-serif', 
			  'Apple Color Emoji', 
			  'Segoe UI Emoji', 
			  'Segoe UI Symbol', 
			  'Noto Color Emoji'
			],
				'sans': [
			  'Nunito Sans', 
			  'ui-sans-serif', 
			  'system-ui', 
			  '-apple-system', 
			  'system-ui', 
			  'Segoe UI', 
			  'Roboto', 
			  'Helvetica Neue', 
			  'Arial', 
			  'Noto Sans', 
			  'sans-serif', 
			  'Apple Color Emoji', 
			  'Segoe UI Emoji', 
			  'Segoe UI Symbol', 
			  'Noto Color Emoji'
			]
			  }
		}
	},

	plugins: [typography, forms, containerQueries]
};
