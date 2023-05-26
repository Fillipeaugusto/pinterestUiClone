import { AppProps } from 'next/app';

import Header from '../components/Header';

import { globalStyles } from '../styles/global';
import Sticky from 'react-sticky-el';
globalStyles();
import '../styles/test.css';

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<>
			<Sticky topOffset={30} style={{ zIndex: '300', backgroundColor: 'white' }}>
				<Header />
			</Sticky>
			<Component {...pageProps} />
		</>
	);
}

export default MyApp;
