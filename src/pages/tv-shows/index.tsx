import React from 'react';
import Head from 'next/head';
import { Wrapper } from '../../components/Wrapper';
import { MediaCardList } from '../../components/MediaCardList';

type TvShowsProps = {
	data: Array<{
		id: number;
		title: string;
		release_date: string;
		cover_url: string;
	}>;
};

const endpoint = 'https://mcuapi.herokuapp.com/api/v1/tvshows';

export async function getServerSideProps() {
	const res = await fetch(endpoint);
	const data = await res.json();

	return {
		props: {
			data: data.data
		}
	};
}

const TvShows = ({ data }: TvShowsProps) => {
	return (
		<>
			<Head>
				<title>Marvel Cinematic Universe Guide - TV Shows</title>
			</Head>

			<section>
				<Wrapper width='wide'>
					<MediaCardList
						data={data}
						basePath='/tv-shows'
					/>
				</Wrapper>
			</section>
		</>
	);
};

export default TvShows;
