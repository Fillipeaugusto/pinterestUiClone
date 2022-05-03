import { styled } from '@stitches/react';
import * as AvatarPrimitive from '@radix-ui/react-avatar';

export const StyledAvatar = styled(AvatarPrimitive.Root, {
	display: 'inline-flex',
	alignItems: 'center',
	justifyContent: 'center',
	verticalAlign: 'middle',
	overflow: 'hidden',
	userSelect: 'none',
	width: 50,
	height: 50,
	borderRadius: '100%',
	cursor: 'pointer',
	margin: '15px',
	backgroundColor: '#efefef',

	variants: {
		type: {
			bold: {
				fontSize: '20px',
				fontWeight: 'bold',
				marginBottom: '30px',
			},
		},
	},
});

export const StyledContainerAvatar = styled('div', {
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'center',
	justifyContent: 'center',
});
