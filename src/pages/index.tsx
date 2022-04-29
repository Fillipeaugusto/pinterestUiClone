/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import { styled } from '@stitches/react';
import { useCallback, useEffect, useState } from 'react';
import { ButtonSave, Button } from '../components/buttons';
import Masonry from 'react-masonry-css';

import Header from '../components/Header';
import { ShareButtonsContainer } from '../components/ShareButtons/ShareButtonsContainer';
import { api } from '../services/api';
import Head from 'next/head';
import { useImages } from '../services/hooks/useImages';
import { useInView } from 'react-intersection-observer';
import { useInfiniteQuery } from 'react-query';

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
	const [arrayData, setArrayData] = useState([]);

	const { data, isLoading, error, isFetching } = useImages(searchValue);

	const VideoData = [
		{
			src: 'https://player.vimeo.com/external/551770838.sd.mp4?s=1351165ed743a52827fb5d156d6375180ee5d049&profile_id=165&oauth2_token_id=57447761',
			alt: 'tbdfbazdfb3est2',
			type: 'video',
		},
		{
			src: 'https://player.vimeo.com/external/493876128.sd.mp4?s=89e2dfdee7ea4bd544b8652a32474672cb6565ff&profile_id=165&oauth2_token_id=57447761',
			alt: 'tbdfbazdfb3est2',
			type: 'video',
		},
		{
			src: 'https://player.vimeo.com/external/468821581.sd.mp4?s=126b63ceb0c2977cac6e6b98da38f1a68ae17e94&profile_id=165&oauth2_token_id=57447761',
			alt: 'tbdfbazdfb3est2',
			type: 'video',
		},
		{
			src: 'https://player.vimeo.com/external/414776833.sd.mp4?s=1f91b2c8ead17805b4ba7d6fd6fed5f2e3c34f8a&profile_id=165&oauth2_token_id=57447761',
			alt: 'tbdfbazdfb3est2',
			type: 'video',
		},
		{
			src: 'https://player.vimeo.com/external/472351224.sd.mp4?s=19555e9d9e1b58dafe28d6b6c850705b39635011&profile_id=165&oauth2_token_id=57447761',
			alt: 'tbdfbazdfb3est2',
			type: 'video',
		},
		{
			src: 'https://player.vimeo.com/external/513998580.sd.mp4?s=b65c3068062184c899b379e18abfc13246ca7c8d&profile_id=165&oauth2_token_id=57447761',
			alt: 'tbdfbazdfb3est2',
			type: 'video',
		},
		{
			src: 'https://player.vimeo.com/external/459059758.sd.mp4?s=92937e0531255b07593b853df8d24981bc897eb2&profile_id=165&oauth2_token_id=57447761',
			alt: 'tbdfbazdfb3est2',
			type: 'video',
		},
		{
			src: 'https://player.vimeo.com/external/660047081.sd.mp4?s=89df34e0a895d745610373968575885e84e3c6db&profile_id=165&oauth_token_id=57447761',
			alt: 'tbdfbazdfb3est2',
			type: 'video',
		},
	];
	useEffect(() => {
		if (data) {
			const mixArray = data?.photos.photos.concat(VideoData);
			setArrayData(mixArray.sort(() => Math.random() - 0.5));
		}
	}, [data]);

	const handleSearch = useCallback(async (searchValue: string) => {
		setSearchValue(searchValue);
	}, []);

	console.log(arrayData);
	return (
		<div>
			<Head>
				<title>Ui clone Pinterest by Fillipe Augusto</title>
			</Head>

			<div style={{ marginTop: '10px' }}>
				{isLoading || isFetching ? (
					<div
						style={{
							display: 'flex',
							alignItems: 'center',
							width: '100%',
							justifyContent: 'center',
							flexDirection: 'column',
						}}
					>
						<img src="/spiner.gif" alt="spinner" style={{ maxWidth: '100px' }} />
						<div style={{ maxWidth: '500px', textAlign: 'center' }}>
							<h1>We're adding new ideas to your home feed!</h1>
						</div>
					</div>
				) : (
					<Masonry
						breakpointCols={breakpointColumnsObj}
						className="my-masonry-grid"
						columnClassName="my-masonry-grid_column"
					>
						{arrayData.map((image) => {
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
									}}
									className="containerC"
									key={image.src.medium || image.src}
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
											src={image.src.medium}
											alt={image.src.medium}
											// srcSet={image.src.original}
											style={{ display: 'block', width: '100%', borderRadius: '15px' }}
										/>
									)}
									<div className="overlay"></div>
									<div className="button">
										<ButtonSave>Save</ButtonSave>
									</div>
									<ShareButtonsContainer className="shareButton">
										<Button type="dots">
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
									</ShareButtonsContainer>
								</div>
							);
						})}
					</Masonry>
				)}
			</div>
		</div>
	);
}
