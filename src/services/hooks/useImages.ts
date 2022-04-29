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
	if (searchParam !== '') {
		const response = await api.get(
			`https://api.pexels.com/v1/curated?page=1&per_page=100/${searchParam}`
		);
		const photos = response.data;
		return { photos };
	} else {
		const response = await api.get(
			`https://api.pexels.com/v1/curated?page=1&per_page=100`
		);
		const photos = response.data;
		return { photos };
	}
}

export function useImages(searchParam = '') {
	return useQuery(['photos', searchParam], () => getData({ searchParam }), {
		staleTime: 1000 * 60 * 60 * 24,
		cacheTime: 1000 * 60 * 60 * 24,
	});
}
