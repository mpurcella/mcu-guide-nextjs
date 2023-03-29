import React from 'react';
import Head from 'next/head';
import { Wrapper } from '../../components/Wrapper';
import { MediaCardList } from '../../components/MediaCardList';

type MoviesProps = {
	data: {
		data: Array<{
			id: number;
			title: string;
			release_date: string;
			cover_url: string;
		}>;
	};
};

const endpoint = 'https://mcuapi.herokuapp.com/api/v1/movies';

export async function getServerSideProps() {
	const res = await fetch(endpoint);
	const data = await res.json();

	return {
		props: { data }
	};
}

const Movies = ({ data }: MoviesProps) => {
	return (
		<>
			<Head>
				<title>Marvel Cinematic Universe Guide - Movies</title>
			</Head>

			<section>
				<Wrapper width='wide'>
					<MediaCardList
						data={data}
						basePath='/movies'
					/>
				</Wrapper>
			</section>
		</>
	);
};

export default Movies;
