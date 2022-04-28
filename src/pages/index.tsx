/* eslint-disable @next/next/no-img-element */
import { styled } from '@stitches/react';
import Masonry from 'react-masonry-css';
import Sticky from 'react-sticky-el';
import Header from '../components/Header';
export default function Home() {
	const breakpointColumnsObj = {
		default: 9,
		1430: 6,
		1300: 6,
		1100: 5,
		940: 4,
		700: 3,
		500: 2,
	};

	const Button = styled('button', {
		backgroundColor: 'gainsboro',
		borderRadius: '9999px',
		fontSize: '16px',
		border: '0',
		'&:hover': {
			backgroundColor: 'lightgray',
		},
		padding: '5px',
		margin: '5px',
		display: 'flex',
		alignItems: 'center',
	});

	const images = [
		{
			src: 'https://i.pinimg.com/564x/c4/35/b4/c435b4565603b8aeaa16b8c354b0e267.jpg',
			alt: 'tfbfbesfgbt',
		},
		{
			src: 'https://i.pinimg.com/originals/95/37/e7/9537e714055b59eb73e151d2e33ac80c.jpg',
			alt: 'tbdfbazdfb3est2',
		},
		{
			src: 'https://i.pinimg.com/564x/11/35/56/113556975f283d5d926bd1dff576c84f.jpg',
			alt: 'test23',
		},
		{
			src: 'https://i.pinimg.com/564x/c4/35/b4/c435b4565603b8aeaa16b8c354b0e267.jpg',
			alt: 'test1233',
		},
		{
			src: 'https://i.pinimg.com/564x/ff/ae/bb/ffaebbcab50b37224225a5fdc0e51977.jpg',
			alt: 'testvds\v4',
		},
		{
			src: 'https://i.pinimg.com/564x/bd/73/89/bd73893ea687f2ec0dd572eb9d3217f8.jpg',
			alt: 'tevsdbtgst5',
		},
		{
			src: 'https://i.pinimg.com/564x/cd/99/13/cd9913886ca930bb1fde963b2d89bb5c.jpg',
			alt: 'tesgbfdgbft6',
		},
		{
			src: 'https://i.pinimg.com/564x/ff/ae/bb/ffaebbcab50b37224225a5fdc0e51977.jpg',
			alt: 'test233312312',
		},
		{
			src: 'https://i.pinimg.com/564x/c4/35/b4/c435b4565603b8aeaa16b8c354b0e267.jpg',
			alt: 'test2312fvdc',
		},
		{
			src: 'https://i.pinimg.com/originals/95/37/e7/9537e714055b59eb73e151d2e33ac80c.jpg',
			alt: 'testcdscdc',
		},
		{
			src: 'https://i.pinimg.com/564x/11/35/56/113556975f283d5d926bd1dff576c84f.jpg',
			alt: 'test2dcsdcsdcgb',
		},
		{
			src: 'https://i.pinimg.com/564x/c4/35/b4/c435b4565603b8aeaa16b8c354b0e267.jpg',
			alt: 'test3ghgsbsg',
		},
		{
			src: 'https://i.pinimg.com/564x/ff/ae/bb/ffaebbcab50b37224225a5fdc0e51977.jpg',
			alt: 'test4gsbsgfb',
		},
		{
			src: 'https://i.pinimg.com/564x/bd/73/89/bd73893ea687f2ec0dd572eb9d3217f8.jpg',
			alt: 'test5sgbsgbsgbgs',
		},
		{
			src: 'https://i.pinimg.com/564x/cd/99/13/cd9913886ca930bb1fde963b2d89bb5c.jpg',
			alt: 'test6sbggbsbgsbgs',
		},
		{
			src: 'https://i.pinimg.com/564x/ff/ae/bb/ffaebbcab50b37224225a5fdc0e51977.jpg',
			alt: 'test4sgbbsgbgs',
		},
		{
			src: 'https://i.pinimg.com/564x/bd/73/89/bd73893ea687f2ec0dd572eb9d3217f8.jpg',
			alt: 'test5sgbsbgbsgsbgbsfbfsgbfgb',
		},
		{
			src: 'https://i.pinimg.com/564x/cd/99/13/cd9913886ca930bb1fde963b2d89bb5c.jpg',
			alt: 'test6knh982y9te7gbu',
		},
	];

	return (
		<div>
			<Sticky topOffset={30}>
				<Header />
			</Sticky>

			<div style={{ marginTop: '10px' }}>
				<Masonry
					breakpointCols={breakpointColumnsObj}
					className="my-masonry-grid"
					columnClassName="my-masonry-grid_column"
				>
					{images.map((image) => {
						return (
							<div
								style={{
									width: 'auto',
									height: 'auto',
									maxWidth: '200px',
									borderRadius: '10px',
									position: 'relative',
								}}
								key={image.src}
							>
								<div
									className="sdsda123"
									style={{
										// cursor: 'pointer',
										position: 'absolute',
										top: '0',
										bottom: '0',
										width: '100%',
										height: '100%',
									}}
								>
									<div>
										<h1>oi</h1>
									</div>
								</div>
								<img
									src={image.src}
									alt="test"
									style={{ display: 'block', width: '100%', borderRadius: '10px' }}
								/>
							</div>
						);
					})}
				</Masonry>
			</div>
		</div>
	);
}
