import React from 'react';
import { styled, keyframes } from '@stitches/react';
import { violet, mauve, blackA } from '@radix-ui/colors';
import {
	DotFilledIcon,
	CheckIcon,
	ChevronRightIcon,
} from '@radix-ui/react-icons';
import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu';
import { ButtonModal } from '../buttons';
import { StyledAvatar, StyledContainerAvatar } from '../avatar';

const slideUpAndFade = keyframes({
	'0%': { opacity: 0, transform: 'translateY(2px)' },
	'100%': { opacity: 1, transform: 'translateY(0)' },
});

const slideRightAndFade = keyframes({
	'0%': { opacity: 0, transform: 'translateX(-2px)' },
	'100%': { opacity: 1, transform: 'translateX(0)' },
});

const slideDownAndFade = keyframes({
	'0%': { opacity: 0, transform: 'translateY(-2px)' },
	'100%': { opacity: 1, transform: 'translateY(0)' },
});

const slideLeftAndFade = keyframes({
	'0%': { opacity: 0, transform: 'translateX(2px)' },
	'100%': { opacity: 1, transform: 'translateX(0)' },
});

const StyledContent = styled(DropdownMenuPrimitive.Content, {
	width: 'auto',
	marginTop: '-6px',
	backgroundColor: 'white',
	borderRadius: '20px',
	display: 'flex',
	flexDirection: 'column',
	height: 'auto',
	padding: 5,

	boxShadow:
		'0px 10px 38px -10px rgba(22, 23, 24, 0.35), 0px 10px 20px -15px rgba(22, 23, 24, 0.2)',
	'@media (prefers-reduced-motion: no-preference)': {
		animationDuration: '400ms',
		animationTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
		animationFillMode: 'forwards',
		willChange: 'transform, opacity',
		'&[data-state="open"]': {
			'&[data-side="top"]': { animationName: slideDownAndFade },
			'&[data-side="right"]': { animationName: slideLeftAndFade },
			'&[data-side="bottom"]': { animationName: slideUpAndFade },
			'&[data-side="left"]': { animationName: slideRightAndFade },
		},
	},
});

const itemStyles = {
	all: 'unset',
	fontSize: 13,
	lineHeight: 1,

	// marginBottom: '10px',
	'&hover': {
		backgroundColor: 'black',
	},
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'flex-start',
	// height: 25,
	// width: '306px',
	position: 'relative',
	// margin: '10px',
	userSelect: 'none',
	marginBottom: '5px',
	'&[data-disabled]': {
		color: mauve.mauve8,
		pointerEvents: 'none',
	},

	variants: {
		type: {
			big: {
				all: 'unset',
				fontSize: 13,
				lineHeight: 1,

				'&hover': {
					backgroundColor: 'black',
				},
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'flex-start',
				// height: 25,
				width: '306px',
				position: 'relative',
				margin: '10px',
				marginBottom: '0px',
				userSelect: 'none',

				'&[data-disabled]': {
					color: mauve.mauve8,
					pointerEvents: 'none',
				},
			},
		},
	},
};

const StyledItem = styled(DropdownMenuPrimitive.Item, { ...itemStyles });
const StyledCheckboxItem = styled(DropdownMenuPrimitive.CheckboxItem, {
	...itemStyles,
});
const StyledRadioItem = styled(DropdownMenuPrimitive.RadioItem, {
	...itemStyles,
});
const StyledTriggerItem = styled(DropdownMenuPrimitive.TriggerItem, {
	'&[data-state="open"]': {
		backgroundColor: violet.violet4,
		// color: violet.violet11,
	},
	...itemStyles,
});

const StyledLabel = styled(DropdownMenuPrimitive.Label, {
	paddingLeft: 25,
	fontSize: 12,
	lineHeight: '25px',
	color: mauve.mauve11,
});

const StyledSeparator = styled(DropdownMenuPrimitive.Separator, {
	height: 1,
	// backgroundColor: violet.violet6,
	margin: 5,
});

const StyledItemIndicator = styled(DropdownMenuPrimitive.ItemIndicator, {
	position: 'absolute',
	left: 0,
	width: 25,
	display: 'inline-flex',
	alignItems: 'center',
	justifyContent: 'center',
});

const StyledArrow = styled(DropdownMenuPrimitive.Arrow, {
	fill: 'black',
});

// Exports
export const DropdownMenu = DropdownMenuPrimitive.Root;
export const DropdownMenuTrigger = DropdownMenuPrimitive.Trigger;
export const DropdownMenuContent = StyledContent;
export const DropdownMenuItem = StyledItem;
export const DropdownMenuCheckboxItem = StyledCheckboxItem;
export const DropdownMenuRadioGroup = DropdownMenuPrimitive.RadioGroup;
export const DropdownMenuRadioItem = StyledRadioItem;
export const DropdownMenuItemIndicator = StyledItemIndicator;
export const DropdownMenuTriggerItem = StyledTriggerItem;
export const DropdownMenuLabel = StyledLabel;
export const DropdownMenuSeparator = StyledSeparator;
export const DropdownMenuArrow = StyledArrow;

// Your app...
const Box = styled('div', {});

const RightSlot = styled('div', {
	marginLeft: 'auto',
	paddingLeft: 20,
	color: mauve.mauve11,
	':focus > &': { color: 'white' },
	'[data-disabled] &': { color: mauve.mauve8 },
});

const IconButton = styled('button', {
	all: 'unset',
	fontFamily: 'inherit',
	borderRadius: '50%',
	width: '20px',
	height: '20px',

	display: 'inline-flex',
	alignItems: 'center',
	justifyContent: 'center',
	color: '#767676',
	backgroundColor: 'none',

	'&:hover': { cursor: 'pointer', backgroundColor: '#efefef' },
	'&:focus': { boxShadow: `0 0 0 2px black` },
});

export const DropdownMenuDemo = () => {
	const [bookmarksChecked, setBookmarksChecked] = React.useState(true);
	const [urlsChecked, setUrlsChecked] = React.useState(false);
	const [person, setPerson] = React.useState('pedro');

	return (
		<Box>
			<DropdownMenu>
				<DropdownMenuTrigger asChild>
					<IconButton aria-label="Customise options">
						<svg
							width="20"
							height="20"
							viewBox="0 0 15 15"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M3.13523 6.15803C3.3241 5.95657 3.64052 5.94637 3.84197 6.13523L7.5 9.56464L11.158 6.13523C11.3595 5.94637 11.6759 5.95657 11.8648 6.15803C12.0536 6.35949 12.0434 6.67591 11.842 6.86477L7.84197 10.6148C7.64964 10.7951 7.35036 10.7951 7.15803 10.6148L3.15803 6.86477C2.95657 6.67591 2.94637 6.35949 3.13523 6.15803Z"
								fill="currentColor"
								fillRule="evenodd"
								clipRule="evenodd"
							></path>
						</svg>
					</IconButton>
				</DropdownMenuTrigger>

				<DropdownMenuContent sideOffset={5}>
					<small style={{ marginLeft: '18px', marginTop: '10px' }}>
						Currently in
					</small>
					<DropdownMenuItem type="big">
						<ButtonModal type="big">
							{/* <StyledContainerAvatar> */}
							<StyledAvatar type="bold">F</StyledAvatar>
							{/* </StyledContainerAvatar> */}
							<div
								style={{
									display: 'flex',
									alignItems: 'flex-start',
									justifyContent: 'center',
									flexDirection: 'column',
								}}
							>
								<h4>Fillipe Augusto</h4>
								<small style={{ fontWeight: '300' }}>Personal</small>
								<small style={{ fontWeight: '300' }}>
									fillipeaugustoribeiro@gma...
								</small>
							</div>
						</ButtonModal>
					</DropdownMenuItem>
					<small style={{ marginLeft: '18px', marginTop: '10px' }}>
						Your accounts
					</small>
					<DropdownMenuItem type="big">
						<ButtonModal type="big">
							{/* <StyledContainerAvatar> */}
							<StyledAvatar type="bold">F</StyledAvatar>
							{/* </StyledContainerAvatar> */}
							<div
								style={{
									display: 'flex',
									alignItems: 'flex-start',
									justifyContent: 'center',
									flexDirection: 'column',
								}}
							>
								<h4>Fillipe Augusto</h4>
								<small style={{ fontWeight: '300' }}> Business</small>
							</div>
						</ButtonModal>
					</DropdownMenuItem>
					<div style={{ marginBottom: '10px' }}>
						<DropdownMenuItem>
							<ButtonModal type="modal">Add account</ButtonModal>
						</DropdownMenuItem>
						<DropdownMenuItem>
							<ButtonModal type="modal">Convert to business</ButtonModal>
						</DropdownMenuItem>
					</div>
					<small style={{ marginLeft: '8px' }}>More options</small>
					<DropdownMenuItem>
						<ButtonModal type="modal">Settings</ButtonModal>
					</DropdownMenuItem>
					<DropdownMenuItem>
						<ButtonModal type="modal">Tune your home feed</ButtonModal>
					</DropdownMenuItem>
					<DropdownMenuItem>
						<ButtonModal type="modal">Install the Windows app</ButtonModal>
					</DropdownMenuItem>
					<DropdownMenuItem>
						<ButtonModal type="modal">
							<span>Get help</span>
							<svg
								className="Hn_ gUZ pBj U9O kVc"
								height="12"
								width="12"
								viewBox="0 0 24 24"
								aria-label=", External"
								role="img"
							>
								<path d="M4.928 1a2.357 2.357 0 1 0 0 4.714h10.024L1.69 18.976a2.36 2.36 0 0 0 0 3.334 2.35 2.35 0 0 0 1.668.69c.603 0 1.206-.229 1.667-.69l13.26-13.263v10.024a2.358 2.358 0 1 0 4.715 0V1H4.928Z"></path>
							</svg>
						</ButtonModal>
					</DropdownMenuItem>
					<DropdownMenuItem>
						<ButtonModal type="header">
							<span>See terms and privacy</span>
							<svg
								className="Hn_ gUZ pBj U9O kVc"
								height="12"
								width="12"
								viewBox="0 0 24 24"
								aria-label=", External"
								role="img"
							>
								<path d="M4.928 1a2.357 2.357 0 1 0 0 4.714h10.024L1.69 18.976a2.36 2.36 0 0 0 0 3.334 2.35 2.35 0 0 0 1.668.69c.603 0 1.206-.229 1.667-.69l13.26-13.263v10.024a2.358 2.358 0 1 0 4.715 0V1H4.928Z"></path>
							</svg>
						</ButtonModal>
					</DropdownMenuItem>
					<DropdownMenuItem>
						<ButtonModal type="header">Log out</ButtonModal>
					</DropdownMenuItem>
				</DropdownMenuContent>
			</DropdownMenu>
		</Box>
	);
};

export default DropdownMenuDemo;
