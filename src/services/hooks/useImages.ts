import { useQuery } from 'react-query';
import { api } from '../../services/api';

import { createClient } from 'pexels';

const client = createClient(
	'563492ad6f917000010000014859f3b1e600420b90a85202f40176bb'
);

type Photo = {
	src: {
		original: string;
		large2x: string;
		large: string;
		medium: string;
		small: string;
		portrait: string;
		landscape: string;
		tiny: string;
	};
};

type GetBarbershopsResponse = {
	photos: Photo[];
};

async function getData({ searchParam = '' }) {
	if (searchParam !== '') {
		const photos = await client.photos
			.curated({ per_page: 100, page: 1 })
			.then((photos) => {
				return photos.photos;
			});

		return { photos };
	} else {
		// const response = await api.get(
		// 	`https://api.pexels.com/v1/curated?page=20&per_page=80`,
		// 	config
		// );

		const photos = await client.photos
			.curated({ per_page: 100, page: 1 })
			.then((photos) => {
				return photos.photos;
			});

		return { photos };
	}
}

export function useImages(searchParam = '') {
	return useQuery(['photos', searchParam], () => getData({ searchParam }), {
		staleTime: 1000 * 100,
	});
}
