/* eslint-disable @next/next/no-img-element */
import { styled } from '@stitches/react';
import { useCallback, useEffect, useState } from 'react';
import { ButtonSave, Button } from '../components/buttons';
import Masonry from 'react-masonry-css';
import Sticky from 'react-sticky-el';
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
	const [images, setImages] = useState([]);
	const [searchValue, setSearchValue] = useState('');
	function Randomize() {
		let images = [
			{
				src: 'https://i.pinimg.com/564x/c4/35/b4/c435b4565603b8aeaa16b8c354b0e267.jpg',
				alt: 'tfbfbesfgbt',
				type: 'image',
			},
			{
				src: 'https://v16-webapp.tiktok.com/dd268db6717f7c70248b08df1ac13861/626b5f7f/video/tos/useast2a/tos-useast2a-ve-0068c004/f21eed0577034c03bf88b3a2206f6efa/?a=1988&br=2184&bt=1092&cd=0%7C0%7C1%7C0&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=eXd.6HAzMyq8Z5RHYwe2NF.eyl7Gb&l=202204282145030101921611440D34565B&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=Mzluc2Y6Zjt1PDMzNzczM0ApNTRkZjM1N2U6Nzg6NDZpaWdzYC1ycjRvYmhgLS1kMTZzczIxXjE1L2A0MjEwYi9iMjM6Yw%3D%3D&vl=&vr=',
				alt: 'tfbfbesfgbt',
				type: 'video',
			},
			{
				src: 'https://i.pinimg.com/564x/a2/45/ff/a245ff14d03597d127b14ba315aa53ff.jpg',
				alt: 'tbdfbazdfb3est2',
				type: 'image',
			},
			{
				src: 'https://i.pinimg.com/564x/25/05/82/25058294759f73e2960048c3e413b898.jpg',
				alt: 'tbdfbazdfb3est2',
				type: 'image',
			},
			{
				src: 'https://i.pinimg.com/564x/cb/cf/58/cbcf58facceb1c9f3df2737908048f1d.jpg',
				alt: 'tfbfbesfgbt',
				type: 'image',
			},
			{
				src: 'https://i.pinimg.com/564x/be/ef/44/beef44d95b94bd613ded9d424b0d5240.jpg',
				alt: 'tbdfbazdfb3est2',
				type: 'image',
			},
			{
				src: 'https://i.pinimg.com/564x/5e/2b/70/5e2b709278fe45c213a94512b86496da.jpg',
				alt: 'tbdfbazdfb3est2',
				type: 'image',
			},
			{
				src: 'https://i.pinimg.com/564x/08/d1/20/08d12016ec3c2aa16606a1907381a544.jpg',
				alt: 'tfbfbesfgbt',
				type: 'image',
			},
			{
				src: 'https://i.pinimg.com/564x/6e/a8/c3/6ea8c32a3add45577e2b50f78fccb9be.jpg',
				alt: 'tbdfbazdfb3essdsdt2',
				type: 'image',
			},
			{
				src: 'https://i.pinimg.com/564x/36/06/ee/3606ee87f85c442c60f2c63fc9292a43.jpg',
				alt: 'tbdfbazdfb3est2',
				type: 'image',
			},
			{
				src: 'https://v16-webapp.tiktok.com/86f8b33499dbe6c46b5378c854b1e15a/626b60c4/video/tos/maliva/tos-maliva-ve-0068c799-us/61925e67c6134889a2fc2b8ca79f7061/?a=1988&br=3106&bt=1553&cd=0%7C0%7C1%7C0&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=eXd.6HAzMyq8ZFWHYwe2NUXwyl7Gb&l=202204282150290102230821641F347187&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=ajZyazY6Zmd0PDMzZzczNEApPGU8OjU8OmU2NzhpPDY4NWdhYGQucjQwaGhgLS1kMS9zczZiX2M2NGJeXy4wNGMvLjY6Yw%3D%3D&vl=&vr=',
				alt: 'tbdfbazdfb3est2',
				type: 'video',
			},
			{
				src: 'https://i.pinimg.com/564x/d8/65/0d/d8650d425d9227b9b7c41df24d18a2c6.jpg',
				alt: 'tbdfbazdfb3est2',
				type: 'image',
			},
			{
				src: 'https://i.pinimg.com/564x/8e/da/e7/8edae7b73bc04134e4a5616ab07c1c4f.jpg',
				alt: 'tbdfbazdfb3est2',
				type: 'image',
			},
			{
				src: 'https://i.pinimg.com/564x/05/c2/42/05c24228463bf097c6b6d388fd767b2e.jpg',
				alt: 'tbdfbazdfb3est2',
				type: 'image',
			},
			{
				src: 'https://i.pinimg.com/564x/1d/2d/40/1d2d40b1ecc942bc24d2ed179d8366c3.jpg',
				alt: 'tbdfbazdfb3est2',
				type: 'image',
			},
			{
				src: 'https://i.pinimg.com/564x/db/e9/be/dbe9be43354ef03f29c5f00f383d8904.jpg',
				alt: 'tbdfbazdfb3est2',
				type: 'image',
			},
			{
				src: 'https://i.pinimg.com/564x/73/d9/00/73d900eb6b385532797034238ed3ca88.jpg',
				alt: 'tbdfbazdfb3est2',
				type: 'image',
			},
			{
				src: 'https://i.pinimg.com/564x/36/02/b0/3602b050086f17b912ff902fd865d5ff.jpg',
				alt: 'tbdfbazdfb3est2',
				type: 'image',
			},
			{
				src: 'https://i.pinimg.com/564x/df/80/77/df8077b7362afb2bfc9497008ca59b98.jpg',
				alt: 'tbdfbazdfb3est2',
				type: 'image',
			},
			{
				src: 'https://i.pinimg.com/564x/52/b7/46/52b7465939887827c258832b2ca6b303.jpg',
				alt: 'tbdfbazdfb3est2',
				type: 'image',
			},
			{
				src: 'https://i.pinimg.com/564x/c1/92/bd/c192bd13cb4deb6177fd2f22b2790603.jpg',
				alt: 'tbdfbazdfb3est2',
				type: 'image',
			},

			{
				src: 'https://i.pinimg.com/564x/40/4c/de/404cdec588b65d3d2e935301da6a9dd7.jpg',
				alt: 'tbdfbazdfb3est2',
				type: 'image',
			},
			{
				src: 'https://i.pinimg.com/564x/89/ba/8f/89ba8fa4c59ef275ce03e861e9c4ab82.jpg',
				alt: 'tbdfbazdfb3est2',
				type: 'image',
			},
			{
				src: 'https://i.pinimg.com/564x/8e/e1/80/8ee1800da1d41552b8c93e028482f5fa.jpg',
				alt: 'tbdfbazdfb3est2',
				type: 'image',
			},
			{
				src: 'https://v16-webapp.tiktok.com/3d70d8df260f204214719e88a604e4d7/626b6819/video/tos/useast2a/tos-useast2a-pve-0037-aiso/e4f87913e64143a7b740c2c98d109f85/?a=1988&br=2724&bt=1362&cd=0%7C0%7C1%7C0&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=eXd.6HAzMyq8ZR0BYwe2NwIwyl7Gb&l=2022042822220201022307914521393277&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=ampzZjY6Zmt1OTMzZjczM0ApOGY1NjQ2PDszN2hlMzk5ZGdnZGVpcjRncTVgLS1kMWNzcy9iMjQvLTYxYzRfLzI2M2M6Yw%3D%3D&vl=&vr=',
				alt: 'tbdfbazdfb3est2',
				type: 'video',
			},
			{
				src: 'https://v16-webapp.tiktok.com/2b782f39918b7e3e52c14b0638ee9dfc/626b6a38/video/tos/alisg/tos-alisg-pve-0037/fe7dc6d107a249cea8ada6a84e21e74b/?a=1988&br=4174&bt=2087&cd=0%7C0%7C1%7C0&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=eXd.6HAzMyq8ZqGBYwe2N0Seyl7Gb&l=20220428223053010189050158043B0F89&lr=tiktok&mime_type=video_mp4&net=0&pl=0&qs=0&rc=M3hkOjQ6Zjc4OzMzODgzNEApZmU6OmY6NTs7N2c4PGdoN2dhZmlxcjQwMzBgLS1kLy1zcy0yMC4vL181MjVjMS4zXzY6Yw%3D%3D&vl=&vr=',
				alt: 'tbdfbazdfb3est2',
				type: 'video',
			},
			{
				src: 'https://v16-webapp.tiktok.com/52c6d0f37b4b9b19c28d2f81dbd4f2d8/626b6a3b/video/tos/alisg/tos-alisg-pve-0037/240943c296e649dd97e8f67bff0da320/?a=1988&br=4388&bt=2194&cd=0%7C0%7C1%7C0&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=eXd.6HAzMyq8Z5GBYwe2NdT0yl7Gb&l=202204282230560101890770221C3A80CC&lr=tiktok&mime_type=video_mp4&net=0&pl=0&qs=0&rc=M3UzaDY6Zjc6OjMzODgzNEApNGhmNTczNzs8NzYzNTplNmdgaC1qcjRnby5gLS1kLy1zczZjMDJgMTRjNGJeMjJiMGE6Yw%3D%3D&vl=&vr=',
				alt: 'tbdfbazdfb3est2',
				type: 'video',
			},
		];
		setImages((images = images.sort(() => Math.random() - 0.5)));
	}

	// useEffect(() => {
	// 	Randomize();
	// }, []);

	// useEffect(() => {
	// 	const newImages = api
	// 		.get('https://api.pexels.com/v1/curated?page=1&per_page=100')
	// 		.then((response) => {
	// 			setImages(response.data.photos);
	// 		});
	// }, []);

	// console.log(images);

	const { data, isLoading, error, isFetching } = useImages(searchValue);

	const handleSearch = useCallback(async (searchValue: string) => {
		setSearchValue(searchValue);
	}, []);

	console.log(data?.photos?.photos);

	console.log(data);
	return (
		<div>
			<Head>
				<title>Ui clone Pinterest by Fillipe Augusto</title>
			</Head>
			<Sticky topOffset={30}>
				<Header />
			</Sticky>

			<div style={{ marginTop: '10px' }}>
				<Masonry
					breakpointCols={breakpointColumnsObj}
					className="my-masonry-grid"
					columnClassName="my-masonry-grid_column"
				>
					{data?.photos?.photos.map((image) => {
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
								key={image.src.original}
							>
								{image.type === 'video' ? (
									<video
										src={image.src.original}
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
										src={image.src.original}
										alt={image.src.original}
										style={{ display: 'block', width: '100%', borderRadius: '15px' }}
									/>
								)}
								<div className="overlay"></div>
								<div className="button">
									<ButtonSave>Save</ButtonSave>
								</div>
								<ShareButtonsContainer className="shareButton">
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
								</ShareButtonsContainer>
							</div>
						);
					})}
				</Masonry>
			</div>
		</div>
	);
}
