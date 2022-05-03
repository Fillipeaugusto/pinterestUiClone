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
			share: {
				height: 'auto',
				width: 'auto',
				cursor: 'pointer',
				backgroundColor: 'gainsboro',
				borderRadius: '9999px',
				fontSize: '16px',
				border: '0',
				padding: '7px',
				margin: '5px',
				display: 'flex',
				alignItems: 'center',
				'&:hover': {
					backgroundColor: '#efefef',
				},
			},
			dots: {
				height: 'auto',
				width: 'auto',
				cursor: 'pointer',
				backgroundColor: 'gainsboro',
				borderRadius: '9999px',
				fontSize: '16px',
				border: '0',
				padding: '7px',
				margin: '5px',
				display: 'flex',
				alignItems: 'center',
				'&:hover': {
					backgroundColor: '#efefef',
				},
			},
		},
	},
});

export const ButtonSave = styled('button', {
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
	backgroundColor: '#e60023',
	'&:hover': {
		backgroundColor: '#e60029',
	},
	color: '#fff',
	fontWeight: 'bold',
});

export const ButtonModal = styled('button', {
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'flex-start',
	paddingLeft: '10px',
	padding: '8px',
	backgroundColor: 'transparent',
	border: 'none',
	borderRadius: '10px',
	fontSize: '16px',
	marginTop: '10px',
	width: '100%',

	'&:hover': {
		backgroundColor: '#ddd',
	},

	fontWeight: 'bold',

	variants: {
		type: {
			header: {
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'space-between',

				// padding: '8px',
				backgroundColor: 'transparent',
				border: 'none',
				borderRadius: '10px',
				fontSize: '16px',
				marginTop: '10px',
				width: '100%',

				'&:hover': {
					backgroundColor: '#ddd',
					// border: '4px solid #0074e8',
				},

				fontWeight: 'bold',
			},
			big: {
				display: 'flex',
				alignItems: 'center',
				// justifyContent: 'flex-start',

				padding: '2px',
				backgroundColor: 'transparent',
				border: 'none',
				borderRadius: '10px',
				fontSize: '16px',
				marginTop: '10px',
				width: '100%',

				'&:hover': {
					backgroundColor: '#ddd',
					// border: '4px solid #0074e8',
				},

				fontWeight: 'bold',
			},
			modal: {
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'space-between',
				backgroundColor: 'transparent',
				border: 'none',
				borderRadius: '10px',
				fontWeight: 'bold',
				fontSize: '16px',
				// marginTop: '10px',
				paddingTop: '8px',
				width: '100%',
				'&:hover': {
					backgroundColor: '#ddd',
				},
			},
		},
	},
});

// export const ButtonShare = styled('button', {
// 	cursor: 'pointer',
// 	'&:hover': {
// 		backgroundColor: '#efefef',
// 	},

// 	backgroundColor: 'gainsboro',
// 	borderRadius: '9999px',
// 	fontSize: '16px',
// 	border: '0',
// 	padding: '7px',
// 	margin: '5px',
// 	display: 'flex',
// 	alignItems: 'center',

// 	variants: {
// 		type: {
// 			secondary: {
// 				color: '#fff',
// 				fontWeight: 'bold',
// 				'&:hover': {
// 					backgroundColor: '#efefef',
// 					color: 'red',
// 				},
// 			},
// 		},
// 	},
// });
