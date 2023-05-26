/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */

import { useCallback, useEffect, useState } from 'react';
import { ButtonSave, Button, ButtonModal } from '../components/buttons';
import Masonry from 'react-masonry-css';

import { ShareButtonsContainer } from '../components/ShareButtons/ShareButtonsContainer';

import Head from 'next/head';

import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from '@radix-ui/react-popover';

import { StyledAvatar, StyledContainerAvatar } from '../components/avatar';
import {
	Input,
	InputContainer,
	SeachContainer,
	SeachWrapper,
	SearchIconContainer,
} from '../components/Header/styles';
import { imageData } from '../mock/data';

export default function Home() {
	const breakpointColumnsObj = {
		default: 7,
		1669: 5,
		1534: 5,
		1298: 4,
		1076: 3,
		850: 2,
		774: 2,
		614: 1,
		370: 1,
	};

	const [searchValue, setSearchValue] = useState('');

	const handleSearch = useCallback(async (searchValue: string) => {
		setSearchValue(searchValue);
	}, []);

	return (
		<div>
			<Head>
				<title>Ui clone Pinterest by Fillipe Augusto</title>
			</Head>

			<div style={{ marginTop: '10px' }}>
				<Masonry
					breakpointCols={breakpointColumnsObj}
					className="my-masonry-grid"
					columnClassName="my-masonry-grid_column"
				>
					{imageData.map((image) => {
						return (
							<div
								style={{
									width: '236px',
									height: 'auto',
									maxWidth: '236px',
									borderRadius: '15px',
									border: 'none',
									backgroundColor: 'transparent',
									position: 'relative',
									overflow: 'hidden',
									cursor: 'zoom-in',
								}}
								className="containerC"
								key={image.src || image.src}
							>
								{image.type === 'video' ? (
									<video
										src={image.src}
										// poster="https://i.pinimg.com/564x/73/0b/17/730b179626bce26fd7425564dc56b614.jpg"
										autoPlay
										muted
										style={{ display: 'block', width: '100%', borderRadius: '15px' }}
										loop
									>
										<track kind="captions" src="" />
									</video>
								) : (
									<img
										src={image.src}
										alt={image.src}
										// srcSet={image.src.original}
										style={{ display: 'block', width: '100%', borderRadius: '15px' }}
									/>
								)}
								<div className="overlay"></div>
								<div className="button">
									<ButtonSave>Save</ButtonSave>
								</div>
								<ShareButtonsContainer className="shareButton">
									<Popover>
										<PopoverTrigger asChild>
											<Button type="share">
												<svg
													className="gUZ pBj U9O kVc"
													height="16"
													width="16"
													viewBox="0 0 24 24"
													aria-hidden="true"
													aria-label=""
													role="img"
												>
													<path d="M21 14c1.1 0 2 .9 2 2v6c0 1.1-.9 2-2 2H3c-1.1 0-2-.9-2-2v-6c0-1.1.9-2 2-2s2 .9 2 2v4h14v-4c0-1.1.9-2 2-2zM8.82 8.84c-.78.78-2.05.79-2.83 0-.78-.78-.79-2.04-.01-2.82L11.99 0l6.02 6.01c.78.78.79 2.05.01 2.83-.78.78-2.05.79-2.83 0l-1.2-1.19v6.18a2 2 0 1 1-4 0V7.66L8.82 8.84z"></path>
												</svg>
											</Button>
										</PopoverTrigger>
										<PopoverContent sideOffset={8}>
											<div
												style={{
													backgroundColor: 'white',
													padding: '10px',
													borderRadius: '10px',
													display: 'flex',
													flexDirection: 'column',
													width: '362px',
													alignItems: 'center',
												}}
											>
												<h4>Send this pin</h4>
												<div
													style={{
														display: 'flex',
														flexDirection: 'row',
														flexWrap: 'wrap',
														width: '100%',
														paddingLeft: '10px',
														paddingRight: '10px',
													}}
												>
													<StyledContainerAvatar>
														<StyledAvatar>
															<svg
																width="48"
																height="48"
																viewBox="0 0 56 56"
																fill="none"
																xmlns="http://www.w3.org/2000/svg"
																display="block"
															>
																<rect width="56" height="56" rx="28" fill="#25D366"></rect>
																<path
																	fillRule="evenodd"
																	clipRule="evenodd"
																	d="M39.206 16.65A15.75 15.75 0 0 0 27.99 12c-8.74 0-15.854 7.113-15.857 15.855a15.821 15.821 0 0 0 2.117 7.927L12 44l8.406-2.205a15.837 15.837 0 0 0 7.577 1.93h.007c8.74 0 15.853-7.114 15.856-15.857a15.76 15.76 0 0 0-4.64-11.218ZM27.99 41.047h-.005c-2.365 0-4.684-.636-6.708-1.837l-.482-.286-4.988 1.309 1.331-4.864-.313-.499a13.146 13.146 0 0 1-2.015-7.014c.003-7.266 5.915-13.178 13.185-13.178a13.09 13.09 0 0 1 9.318 3.865 13.098 13.098 0 0 1 3.856 9.324c-.003 7.267-5.915 13.18-13.179 13.18Zm7.23-9.871c-.397-.199-2.345-1.157-2.708-1.289-.364-.132-.628-.198-.891.198-.264.397-1.024 1.29-1.255 1.554-.231.264-.462.297-.858.099-.396-.199-1.673-.617-3.187-1.966-1.178-1.051-1.973-2.348-2.204-2.745-.231-.397-.024-.611.173-.808.178-.178.397-.463.595-.695.198-.23.264-.396.396-.66.132-.265.066-.496-.033-.695-.098-.198-.89-2.148-1.221-2.941-.322-.773-.649-.668-.892-.68a16.01 16.01 0 0 0-.759-.014c-.264 0-.693.099-1.057.495-.363.397-1.387 1.356-1.387 3.305 0 1.95 1.42 3.835 1.618 4.1.199.264 2.794 4.265 6.769 5.982.945.409 1.683.653 2.259.835.948.302 1.812.26 2.495.157.76-.114 2.344-.958 2.674-1.884.33-.925.33-1.719.23-1.884-.098-.166-.362-.266-.758-.464Z"
																	fill="#fff"
																></path>
															</svg>
														</StyledAvatar>
														<small>WhatsApp</small>
													</StyledContainerAvatar>
													<StyledContainerAvatar>
														<StyledAvatar>
															<svg
																width="48"
																height="48"
																viewBox="0 0 56 56"
																fill="none"
																xmlns="http://www.w3.org/2000/svg"
																display="block"
															>
																<path
																	d="M56 28C56 12.536 43.464 0 28 0S0 12.536 0 28c0 13.975 10.24 25.56 23.625 27.66V36.094h-7.11V28h7.11v-6.169c0-7.017 4.18-10.893 10.576-10.893 3.064 0 6.268.546 6.268.546v6.891h-3.53c-3.479 0-4.564 2.159-4.564 4.373V28h7.766l-1.242 8.094h-6.524V55.66C45.761 53.56 56 41.975 56 28Z"
																	fill="#1877F2"
																></path>
																<path
																	d="M38.9 36.094 40.14 28h-7.765v-5.252c0-2.215 1.085-4.373 4.563-4.373h3.53v-6.89s-3.203-.547-6.267-.547c-6.396 0-10.576 3.876-10.576 10.893V28h-7.11v8.094h7.11V55.66a28.206 28.206 0 0 0 8.75 0V36.094h6.524Z"
																	fill="#fff"
																></path>
															</svg>
														</StyledAvatar>
														<small>Facebook</small>
													</StyledContainerAvatar>
													<StyledContainerAvatar>
														<StyledAvatar>
															<svg
																width="48"
																height="48"
																viewBox="0 0 56 56"
																fill="none"
																xmlns="http://www.w3.org/2000/svg"
																display="block"
															>
																<rect width="56" height="56" rx="28" fill="#1DA1F2"></rect>
																<path
																	d="M24.34 42c11.37 0 17.591-9.429 17.591-17.591 0-.265 0-.53-.012-.796a12.596 12.596 0 0 0 3.087-3.207c-1.11.494-2.303.82-3.557.976a6.22 6.22 0 0 0 2.725-3.424 12.299 12.299 0 0 1-3.93 1.495 6.17 6.17 0 0 0-4.51-1.953 6.19 6.19 0 0 0-6.186 6.185c0 .483.06.953.157 1.411-5.136-.253-9.694-2.725-12.744-6.463a6.184 6.184 0 0 0-.832 3.111 6.2 6.2 0 0 0 2.749 5.148 6.254 6.254 0 0 1-2.797-.771v.084a6.196 6.196 0 0 0 4.955 6.065 6.028 6.028 0 0 1-1.628.217c-.397 0-.783-.036-1.157-.109a6.182 6.182 0 0 0 5.775 4.293 12.4 12.4 0 0 1-7.68 2.652c-.494 0-.989-.024-1.471-.084A17.587 17.587 0 0 0 24.34 42Z"
																	fill="#fff"
																></path>
															</svg>
														</StyledAvatar>
														<small>Twitter</small>
													</StyledContainerAvatar>
													<StyledContainerAvatar>
														<StyledAvatar>
															<svg
																width="48"
																height="48"
																viewBox="0 0 56 56"
																fill="none"
																xmlns="http://www.w3.org/2000/svg"
																display="block"
															>
																<rect width="56" height="56" rx="28" fill="#EFEFEF"></rect>
																<path
																	fillRule="evenodd"
																	clipRule="evenodd"
																	d="M18.1106 19.6408C18.2759 19.551 18.4653 19.5 18.6667 19.5H37.3333C37.5535 19.5 37.7594 19.561 37.9351 19.667C37.9351 19.667 37.9352 19.667 37.9352 19.667L28.7395 27.2024C28.3095 27.5547 27.6905 27.5547 27.2605 27.2024L18.0648 19.667C18.0799 19.6579 18.0951 19.6492 18.1106 19.6408ZM14 20.8611V20.6667C14 18.0893 16.0893 16 18.6667 16H37.3333C39.9107 16 42 18.0893 42 20.6667V20.8611V34.6667C42 37.244 39.9107 39.3333 37.3333 39.3333H18.6667C16.0893 39.3333 14 37.244 14 34.6667V20.8611ZM38.5 23.7292V34.6667C38.5 35.311 37.9777 35.8333 37.3333 35.8333H18.6667C18.0223 35.8333 17.5 35.311 17.5 34.6667V23.7292L25.0422 29.9095C26.7622 31.319 29.2378 31.319 30.9578 29.9096L38.5 23.7292Z"
																	fill="black"
																></path>
															</svg>
														</StyledAvatar>
														<small>Email</small>
													</StyledContainerAvatar>
													<StyledContainerAvatar>
														<StyledAvatar>
															<svg
																className="Hn_ gUZ pBj U9O kVc"
																height="20"
																width="20"
																viewBox="0 0 24 24"
																aria-hidden="true"
																aria-label=""
																role="img"
															>
																<path d="m21 7.24-4.05 4.05-1.06-1.06.67-.67a1.5 1.5 0 1 0-2.12-2.12l-.67.67-1.06-1.06L16.76 3zm-9.7 9.7L7.23 21 3 16.76l4.05-4.05 1.06 1.06-.67.67a1.5 1.5 0 0 0 2.12 2.12l.67-.67zM14.63.89l-4.05 4.05a3 3 0 0 0 0 4.24l1.06 1.06-1.42 1.42-1.06-1.06a3 3 0 0 0-4.24 0L.88 14.64a3 3 0 0 0 0 4.24l4.24 4.24a3 3 0 0 0 4.24 0l4.05-4.05a3 3 0 0 0 0-4.24l-1.06-1.06 1.42-1.42 1.06 1.06a3 3 0 0 0 4.24 0l4.05-4.05a3 3 0 0 0 0-4.24L18.88.88a3 3 0 0 0-4.24 0z"></path>
															</svg>
														</StyledAvatar>
														<small>Copy link</small>
													</StyledContainerAvatar>
												</div>
												<SeachContainer modal="primary">
													<SeachWrapper search="primary">
														<InputContainer search="primary">
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
																placeholder="Name or email"
																role="combobox"
																type="text"
															/>
														</InputContainer>
													</SeachWrapper>
												</SeachContainer>
											</div>
										</PopoverContent>
									</Popover>

									<Popover>
										<PopoverTrigger asChild>
											<Button type="share">
												<svg
													className="gUZ pBj U9O kVc"
													height="16"
													width="16"
													viewBox="0 0 24 24"
													aria-hidden="true"
													aria-label=""
													role="img"
												>
													<path d="M12 9c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3M3 9c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm18 0c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3z"></path>
												</svg>
											</Button>
										</PopoverTrigger>
										<PopoverContent sideOffset={8}>
											<div
												style={{
													backgroundColor: 'white',
													padding: '10px',
													borderRadius: '10px',
													display: 'flex',
													flexDirection: 'column',
												}}
											>
												<small style={{ padding: '10px' }}>
													This Pin was inspired by your recent activity
												</small>
												<ButtonModal>Hide Pin</ButtonModal>
												<ButtonModal>Dowload Image</ButtonModal>
												<ButtonModal>Report Pin</ButtonModal>
											</div>
										</PopoverContent>
									</Popover>
								</ShareButtonsContainer>
							</div>
						);
					})}
				</Masonry>
			</div>
		</div>
	);
}
