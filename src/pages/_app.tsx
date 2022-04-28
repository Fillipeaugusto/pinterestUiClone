import { AppProps } from 'next/app';
import Header from '../components/Header';
import { globalStyles } from '../styles/global';
globalStyles();
import '../styles/test.css';
// import Sticky from 'react-sticky-el';
function MyApp({ Component, pageProps }: AppProps) {
	return (
		<>
			{/* <Sticky>
				<Header />
			</Sticky> */}
			<Component {...pageProps} />
		</>
	);
}

export default MyApp;
