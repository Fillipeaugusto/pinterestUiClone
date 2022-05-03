/* eslint-disable @next/next/google-font-display */
/* eslint-disable @next/next/no-sync-scripts */
import Document, { Head, Html, Main, NextScript } from 'next/document';
import { getCssText } from '../styles';

export default class MyDocument extends Document {
	render() {
		return (
			<Html>
				<Head>
					<link rel="preconnect" href="https://fonts.googleapis.com" />
					<link rel="preconnect" href="https://fonts.gstatic.com" />
					<link
						href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;300;400;600&family=Roboto:wght@100;300;400;500;700&display=swap&family=Ubuntu&display=swap"
						rel="stylesheet"
					/>

					{/* <link rel="shortcut icon" href="/favicon.ico" type="image/png" /> */}
					<link rel="icon" href="https://s.pinimg.com/webapp/favicon-54a5b2af.png" />

					<link rel="manifest" href="/manifest.json" />
					<meta
						name="viewport"
						content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover"
					/>

					<style
						id="stitches"
						dangerouslySetInnerHTML={{ __html: getCssText() }}
					></style>
				</Head>
				<body>
					<Main />
					<NextScript />
					<script
						type="text/javascript"
						src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js"
					/>
				</body>
			</Html>
		);
	}
}
