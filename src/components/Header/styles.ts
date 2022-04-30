import { styled } from '@stitches/react';
import { violet, blackA } from '@radix-ui/colors';
import * as AvatarPrimitive from '@radix-ui/react-avatar';

export const Container = styled('div', {
	marginTop: '10px',
	width: '100%',
	flexDirection: 'column',
	marginBottom: '0',
	zIndex: '1',
	display: 'flex',
});

export const Wrapper = styled('div', {
	flex: '1 1 auto',
	minWidth: '0',
	minHeight: '0',
	alignItems: 'center',
	width: 'calc(12/var(12)*100%)',
	paddingLeft: '16px',
	paddingTop: '4px',
	paddingRight: '16px',
	paddingBottom: '4px',
	flexDirection: 'row',
});

export const Main = styled('div', {
	height: '56px',
	alignItems: 'center',
	width: 'calc(12/var(12)*100%)',
	display: 'flex',
	flexDirection: 'row',
});
export const Svg = styled('svg', {
	display: 'block',
	color: '#e60023',
	strokeWidth: '0',
	verticalAlign: 'middle',
	height: '24',
	width: '24',
	fill: 'currentColor',
});

export const SeachContainer = styled('div', {
	// minWidth: '407px',
	flex: '1 1 auto',
	minHeight: '0',
	paddingLeft: '8px',
	paddingRight: '8px',
	display: 'block',

	variants: {
		modal: {
			primary: {
				width: '100%',
				marginTop: '10px',
			},
		},
	},
});
export const SeachWrapper = styled('div', {
	height: '48px',
	borderRadius: '24px',
	backgroundColor: '#efefef',
	display: 'flex',
	flexDirection: 'row',

	'&:hover': {
		backgroundColor: '#ddd',
	},

	variants: {
		search: {
			primary: {
				backgroundColor: 'transparent',
				'&:hover': {
					backgroundColor: 'transparent',
				},
			},
		},
	},
});

export const Input = styled('input', {
	backgroundColor: 'transparent',
	border: 'none',
	fontSize: '15px',
	fontWeight: 'normal',
	height: '100%',
	width: '100%',
	outline: 'none',
	padding: '0',
});

export const InputContainer = styled('div', {
	padding: '0px 0px 0px 16px',
	height: '100%',
	flex: '1 1 auto',
	minHeight: '0',
	minWidth: '0',
	alignItems: 'center',
	position: 'relative',
	display: 'flex',
	flexDirection: 'row',
	variants: {
		search: {
			primary: {
				border: '2px solid #ddd',
				borderRadius: '24px',
				'&:hover': {
					borderColor: '#cdcdcd',
				},
			},
		},
	},
});

export const SearchIconContainer = styled('div', {
	marginRight: '8px',
	flex: '0 0 auto',
	display: 'block',
});

const StyledAvatar = styled(AvatarPrimitive.Root, {
	display: 'inline-flex',
	alignItems: 'center',
	justifyContent: 'center',
	verticalAlign: 'middle',
	overflow: 'hidden',
	userSelect: 'none',
	width: 45,
	height: 45,
	borderRadius: '100%',
	backgroundColor: 'none',
	cursor: 'pointer',
});

const StyledImage = styled(AvatarPrimitive.Image, {
	width: '100%',
	height: '100%',
	objectFit: 'cover',
	borderRadius: 'inherit',
});

const StyledFallback = styled(AvatarPrimitive.Fallback, {
	width: '24px',
	height: '24px',
	borderRadius: '50%',
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
	backgroundColor: '#efefef',
	color: 'black',
	lineHeight: 1,
	fontWeight: 100,
	'&hover': {
		backgroundColor: 'none',
	},
});

// Exports
export const Avatar = StyledAvatar;
export const AvatarImage = StyledImage;
export const AvatarFallback = StyledFallback;
