import axios from 'axios';

export const api = axios.create({
	baseURL: 'https://pinterest-ui-clone-fillipeaugusto.vercel.app/api',
});
