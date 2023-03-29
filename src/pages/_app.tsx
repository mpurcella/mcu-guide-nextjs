import type { AppProps } from 'next/app';
import Head from 'next/head';
import { Layout } from '@/components/Layout';
import { Open_Sans, Oswald, Roboto_Flex } from 'next/font/google';
import '@/styles/globals.css';

const openSans = Open_Sans({
	subsets: ['latin'],
	variable: '--font-open-sans'
});

const oswald = Oswald({
	subsets: ['latin'],
	variable: '--font-oswald'
});

const robotoFlex = Roboto_Flex({
	subsets: ['latin'],
	variable: '--font-roboto-flex'
});

export default function App({ Component, pageProps }: AppProps) {
	return (
		<>
			<Head>
				<link
					rel='shortcut icon'
					href='/images/favicon.ico'
					type='image/x-icon'
				/>
				<meta
					name='viewport'
					content='width=device-width, initial-scale=1'
				/>
			</Head>

			<Layout className={`${openSans.variable} ${oswald.variable} ${robotoFlex.variable}`}>
				<main className='min-h-[calc(100vh-64px)]}'>
					<Component {...pageProps} />
				</main>
			</Layout>
		</>
	);
}
