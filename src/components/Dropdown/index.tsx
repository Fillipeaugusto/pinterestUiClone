import React from 'react';
import { styled, keyframes } from '@stitches/react';
import { violet, mauve, blackA } from '@radix-ui/colors';
import {
	DotFilledIcon,
	CheckIcon,
	ChevronRightIcon,
} from '@radix-ui/react-icons';
import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu';

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
	minWidth: '360px',
	marginTop: '-6px',
	backgroundColor: 'white',
	borderRadius: '16px',
	display: 'flex',
	flexDirection: 'column',
	overflow: 'auto',
	minHeight: '40px',
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
	color: violet.violet11,
	borderRadius: 3,
	display: 'flex',
	alignItems: 'center',
	height: 25,
	padding: '0 5px',
	position: 'relative',
	paddingLeft: 25,
	userSelect: 'none',

	'&[data-disabled]': {
		color: mauve.mauve8,
		pointerEvents: 'none',
	},

	'&:focus': {
		backgroundColor: violet.violet9,
		color: violet.violet1,
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
		color: violet.violet11,
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
	backgroundColor: violet.violet6,
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
					<DropdownMenuItem>
						New Tab <RightSlot>⌘+T</RightSlot>
					</DropdownMenuItem>
					<DropdownMenuItem>
						New Window <RightSlot>⌘+N</RightSlot>
					</DropdownMenuItem>
					<DropdownMenuItem disabled>
						New Private Window <RightSlot>⇧+⌘+N</RightSlot>
					</DropdownMenuItem>
					<DropdownMenu>
						<DropdownMenuTriggerItem>
							More Tools
							<RightSlot>
								<ChevronRightIcon />
							</RightSlot>
						</DropdownMenuTriggerItem>
						<DropdownMenuContent sideOffset={2} alignOffset={-5}>
							<DropdownMenuItem>
								Save Page As… <RightSlot>⌘+S</RightSlot>
							</DropdownMenuItem>
							<DropdownMenuItem>Create Shortcut…</DropdownMenuItem>
							<DropdownMenuItem>Name Window…</DropdownMenuItem>
							<DropdownMenuSeparator />
							<DropdownMenuItem>Developer Tools</DropdownMenuItem>
						</DropdownMenuContent>
					</DropdownMenu>
					<DropdownMenuSeparator />
					<DropdownMenuCheckboxItem
						checked={bookmarksChecked}
						onCheckedChange={setBookmarksChecked}
					>
						<DropdownMenuItemIndicator>
							<CheckIcon />
						</DropdownMenuItemIndicator>
						Show Bookmarks <RightSlot>⌘+B</RightSlot>
					</DropdownMenuCheckboxItem>
					<DropdownMenuCheckboxItem
						checked={urlsChecked}
						onCheckedChange={setUrlsChecked}
					>
						<DropdownMenuItemIndicator>
							<CheckIcon />
						</DropdownMenuItemIndicator>
						Show Full URLs
					</DropdownMenuCheckboxItem>
					<DropdownMenuSeparator />
					<DropdownMenuLabel>People</DropdownMenuLabel>
					<DropdownMenuRadioGroup value={person} onValueChange={setPerson}>
						<DropdownMenuRadioItem value="pedro">
							<DropdownMenuItemIndicator>
								<DotFilledIcon />
							</DropdownMenuItemIndicator>
							Pedro Duarte
						</DropdownMenuRadioItem>
						<DropdownMenuRadioItem value="colm">
							<DropdownMenuItemIndicator>
								<DotFilledIcon />
							</DropdownMenuItemIndicator>
							Colm Tuite
						</DropdownMenuRadioItem>
					</DropdownMenuRadioGroup>
					{/* <DropdownMenuArrow offset={12} /> */}
				</DropdownMenuContent>
			</DropdownMenu>
		</Box>
	);
};

export default DropdownMenuDemo;
