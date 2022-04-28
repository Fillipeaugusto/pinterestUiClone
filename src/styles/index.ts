import { createStitches, ScaleValue } from '@stitches/react';

export const { styled, getCssText, globalCss } = createStitches({
	theme: {
		colors: {
			primary: '#D73628',
			primaryLight: '#FC4737',
			primaryDark: '#AD1E12 ',

			background: '#FFFFFF',

			title: '#29292E',
			text: '#29292E',

			shape: '#29292E',
			// Outros exemplos
			// placeholder: '',
			// support: '',
		},
		space: {
			'0': '0px',
			'1': '1px',
			'4': '0.25rem',
			'8': '0.5rem',
			'12': '0.75rem',
			'16': '1rem',
			'24': '1.5rem',
			'32': '2rem',
		},
		radii: {
			full: '99999px',
			default: '5px',
		},
		fonts: {
			default: 'Roboto',
		},
	},
	utils: {
		paddingX: (value: ScaleValue<'space'>) => ({
			paddingLeft: value,
			paddingRight: value,
		}),
		paddingY: (value: ScaleValue<'space'>) => ({
			paddingTop: value,
			paddingBottom: value,
		}),
	},
});
