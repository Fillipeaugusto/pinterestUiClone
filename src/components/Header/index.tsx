import { Button, ButtonHome } from '../buttons';
import DropdownMenuDemo from '../Dropdown';
import {
	Avatar,
	AvatarFallback,
	AvatarImage,
	Container,
	Input,
	InputContainer,
	Main,
	SeachContainer,
	SeachWrapper,
	SearchIconContainer,
	Wrapper,
} from './styles';

export default function Header() {
	return (
		<Container>
			<Wrapper>
				<Main>
					<Button>
						<svg
							style={{
								display: 'block',
								color: '#e60023',
								strokeWidth: '0',
								verticalAlign: 'middle',
								height: '24',
								width: '24',
								fill: 'currentColor',
							}}
						>
							<path d="M0 12c0 5.123 3.211 9.497 7.73 11.218-.11-.937-.227-2.482.025-3.566.217-.932 1.401-5.938 1.401-5.938s-.357-.715-.357-1.774c0-1.66.962-2.9 2.161-2.9 1.02 0 1.512.765 1.512 1.682 0 1.025-.653 2.557-.99 3.978-.281 1.189.597 2.159 1.769 2.159 2.123 0 3.756-2.239 3.756-5.471 0-2.861-2.056-4.86-4.991-4.86-3.398 0-5.393 2.549-5.393 5.184 0 1.027.395 2.127.889 2.726a.36.36 0 0 1 .083.343c-.091.378-.293 1.189-.332 1.355-.053.218-.173.265-.4.159-1.492-.694-2.424-2.875-2.424-4.627 0-3.769 2.737-7.229 7.892-7.229 4.144 0 7.365 2.953 7.365 6.899 0 4.117-2.595 7.431-6.199 7.431-1.211 0-2.348-.63-2.738-1.373 0 0-.599 2.282-.744 2.84-.282 1.084-1.064 2.456-1.549 3.235C9.584 23.815 10.77 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12"></path>
						</svg>
					</Button>
					<ButtonHome color="primary">Home</ButtonHome>
					<SeachContainer>
						<SeachWrapper>
							<InputContainer>
								<SearchIconContainer>
									<svg
										style={{
											color: '#767676',
											display: 'block',
											fill: 'currentColor',
											strokeWidth: '0',
											verticalAlign: 'middle',
										}}
										height="16"
										width="16"
										viewBox="0 0 24 24"
										aria-label="Search icon"
										role="img"
									>
										<path d="M10 16c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6m13.12 2.88-4.26-4.26A9.842 9.842 0 0 0 20 10c0-5.52-4.48-10-10-10S0 4.48 0 10s4.48 10 10 10c1.67 0 3.24-.41 4.62-1.14l4.26 4.26a3 3 0 0 0 4.24 0 3 3 0 0 0 0-4.24"></path>
									</svg>
								</SearchIconContainer>
								<Input
									autoCapitalize="off"
									autoCorrect="off"
									autoComplete="off"
									aria-activedescendant=""
									aria-autocomplete="list"
									aria-controls="SuggestionsMenu"
									aria-describedby="searchBoxAccessibleText"
									aria-label="Search"
									aria-expanded="false"
									data-test-id="search-box-input"
									name="searchBoxInput"
									placeholder="Search"
									role="combobox"
									type="text"
								/>
							</InputContainer>
						</SeachWrapper>
					</SeachContainer>
					<div
						style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}
					>
						<div style={{ position: 'relative', display: 'block' }}>
							<div style={{ position: 'relative', display: 'block' }}>
								<Button>
									<svg
										style={{
											display: 'block',
											color: '#767676',

											fill: 'currentColor',
											strokeWidth: '0',
											verticalAlign: 'middle',
										}}
										height="24"
										width="24"
										viewBox="0 0 24 24"
										aria-hidden="true"
										aria-label=""
										role="img"
									>
										<path d="M12 24c-1.66 0-3-1.34-3-3h6c0 1.66-1.34 3-3 3zm7-10.83c1.58 1.52 2.67 3.55 3 5.83H2c.33-2.28 1.42-4.31 3-5.83V7c0-3.87 3.13-7 7-7s7 3.13 7 7v6.17z"></path>
									</svg>
								</Button>
							</div>
						</div>
						<div style={{ position: 'relative', display: 'block' }}>
							<div style={{ position: 'relative', display: 'block' }}>
								<Button>
									<svg
										style={{
											display: 'block',
											color: '#767676',

											fill: 'currentColor',
											strokeWidth: '0',
											verticalAlign: 'middle',
										}}
										height="24"
										width="24"
										viewBox="0 0 24 24"
										aria-hidden="true"
										aria-label=""
										role="img"
									>
										<path d="M18 12.5a1.5 1.5 0 1 1 .001-3.001A1.5 1.5 0 0 1 18 12.5m-6 0a1.5 1.5 0 1 1 .001-3.001A1.5 1.5 0 0 1 12 12.5m-6 0a1.5 1.5 0 1 1 .001-3.001A1.5 1.5 0 0 1 6 12.5M12 0C5.925 0 1 4.925 1 11c0 2.653.94 5.086 2.504 6.986L2 24l5.336-3.049A10.93 10.93 0 0 0 12 22c6.075 0 11-4.925 11-11S18.075 0 12 0"></path>
									</svg>
								</Button>
							</div>
						</div>
						<div style={{ position: 'relative', display: 'block' }}>
							<div style={{ position: 'relative', display: 'block' }}>
								<Button type="secondary">
									<Avatar>
										<AvatarFallback>F</AvatarFallback>
									</Avatar>
								</Button>
							</div>
						</div>
						<div style={{ position: 'relative', display: 'block' }}>
							<div style={{ position: 'relative', display: 'block' }}>
								<DropdownMenuDemo />
							</div>
						</div>
					</div>
				</Main>
			</Wrapper>
		</Container>
	);
}
