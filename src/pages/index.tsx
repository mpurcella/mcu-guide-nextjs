import Head from 'next/head';
import { Hero } from '@/components/Hero';

export default function Home() {
	return (
		<>
			<Head>
				<title>Marvel Cinematic Universe Guide</title>
				<meta
					name='description'
					content='A Guide to the Marvel Cinematic Universe'
				/>
			</Head>
			<Hero />
		</>
	);
}
