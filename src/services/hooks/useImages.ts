import { useQuery } from 'react-query';
import { api } from '../../services/api';

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
	let config = {
		headers: {
			Authorization:
				'Bearer ' + '563492ad6f917000010000014859f3b1e600420b90a85202f40176bb',
		},
	};
	if (searchParam !== '') {
		const response = await api.get(
			`https://api.pexels.com/v1/curated?page=1&per_page=4/${searchParam}`,
			config
		);
		const photos = response.data;
		return { photos };
	} else {
		const response = await api.get(
			`https://api.pexels.com/v1/curated?page=20&per_page=80`,
			config
		);
		const photos = response.data;
		return { photos };
	}
}

export function useImages(searchParam = '') {
	return useQuery(['photos', searchParam], () => getData({ searchParam }), {
		staleTime: 1000 * 60 * 60 * 24,
	});
}
