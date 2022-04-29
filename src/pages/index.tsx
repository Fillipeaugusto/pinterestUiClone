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
			src: 'https://v16-webapp.tiktok.com/fe5a4bdc36a432cc3d6d1f48c49765ef/626bc521/video/tos/useast2a/tos-useast2a-pve-0037-aiso/e4f87913e64143a7b740c2c98d109f85/?a=1988&br=2724&bt=1362&cd=0%7C0%7C1%7C0&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=eXd.6HAzMyq8ZPmlYwe2N703yl7Gb&l=202204290458580101890482201E60034D&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=ampzZjY6Zmt1OTMzZjczM0ApOGY1NjQ2PDszN2hlMzk5ZGdnZGVpcjRncTVgLS1kMWNzcy9iMjQvLTYxYzRfLzI2M2M6Yw%3D%3D&vl=&vr=',
			alt: 'tbdfbazdfb3est2',
			type: 'video',
		},
		{
			src: 'https://v16-webapp.tiktok.com/4a0098425e7fa70b982c49f6b7a55979/626bc5b5/video/tos/useast2a/tos-useast2a-pve-0068/7c8107d1910b4f5f91404f9f4ae98ec1/?a=1988&br=1716&bt=858&cd=0%7C0%7C1%7C0&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=eXd.6HAzMyq8ZR.lYwe2NJ1eyl7Gb&l=202204290502020101890370221C5CE004&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=M3RvNTU6ZnB5OTMzNzczM0ApZThmZTo5aGRmNzs0Z2Q5Zmc2NDAucjRnanBgLS1kMTZzc2MyYjFjMTEuNGNiXi4xLi06Yw%3D%3D&vl=&vr=',
			alt: 'tbdfbazdfb3est2',
			type: 'video',
		},
		{
			src: 'https://v16-webapp.tiktok.com/111f8a26c02bf1c18a350f089dcc6ae9/626bc5b3/video/tos/maliva/tos-maliva-ve-0068c799-us/e5dd99c602ae47f4978e2cdbd65f9c2a/?a=1988&br=2392&bt=1196&cd=0%7C0%7C1%7C0&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=eXd.6HAzMyq8ZR.lYwe2NJ1eyl7Gb&l=202204290502020101890370221C5CE004&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=M21tcDM6ZjRpOzMzZzczNEApNmc8PGQ4OjxoN2lpNTs8PGdrb2I2cjRfby5gLS1kMS9zcy9gNF8uYC5iMDFeLS8xNTY6Yw%3D%3D&vl=&vr=',
			alt: 'tbdfbazdfb3est2',
			type: 'video',
		},
		{
			src: 'https://v16-webapp.tiktok.com/1f202a84be40c0adc7728b3f289954ea/626bccb0/video/tos/maliva/tos-maliva-ve-0068c799-us/6f3c2ed616ab4d8390e61cf41f922a23/?a=1988&br=4106&bt=2053&cd=0%7C0%7C1%7C0&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=eXd.6HAzMyq8ZJSlYwe2NTg0yl7Gb&l=202204290531220101901860441D60A1DD&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=M3A6Ojw6ZnI0OzMzZzczNEApaGgzZzQ3Z2Q4NzZnZDRmaWc2ampzcjRvcmtgLS1kMS9zczQyNi9eNV4wYl8vMC0vNC46Yw%3D%3D&vl=&vr=',
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
