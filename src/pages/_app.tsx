import { AppProps } from 'next/app';
import { QueryClientProvider } from 'react-query';
import Header from '../components/Header';
import { ReactQueryDevtools } from 'react-query/devtools';
import { globalStyles } from '../styles/global';
import Sticky from 'react-sticky-el';
globalStyles();
import '../styles/test.css';
import { queryClient } from '../services/queryClient';
// import Sticky from 'react-sticky-el';
function MyApp({ Component, pageProps }: AppProps) {
	return (
		<>
			{/* <Sticky>
				<Header />
			</Sticky> */}
			<QueryClientProvider client={queryClient}>
				<Sticky topOffset={30} style={{ zIndex: '300', backgroundColor: 'white' }}>
					<Header />
				</Sticky>
				<Component {...pageProps} />
				<ReactQueryDevtools />
			</QueryClientProvider>
		</>
	);
}

export default MyApp;
