import { styled } from '@stitches/react';

export const ButtonHome = styled('button', {
	borderRadius: '24px',
	fontSize: '16px',
	border: '0',
	paddingLeft: '16px',
	paddingRight: '16px',
	display: 'flex',
	alignItems: 'center',
	cursor: 'pointer',
	whiteSpace: 'nowrap',
	height: '48px',
	minWidth: '60px',
	flex: '0 0 auto',

	variants: {
		color: {
			primary: {
				backgroundColor: '#111',
				color: '#fff',
				fontWeight: 'bold',
			},
		},
	},
});

export const Button = styled('button', {
	borderRadius: '50%',
	height: '48px',
	width: '48px',
	backgroundColor: 'transparent',
	border: 'none',
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
	cursor: 'pointer',
	'&:hover': {
		backgroundColor: '#efefef',
	},
	variants: {
		type: {
			secondary: {
				color: '#fff',
				fontWeight: 'bold',
				'&:hover': {
					backgroundColor: '#efefef',
					color: 'red',
				},
			},
		},
	},
});
