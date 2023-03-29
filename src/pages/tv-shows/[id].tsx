import Head from 'next/head';
import React from 'react';
import { TvShowInfo } from '../../components/TvShowInfo';

type TvShowProps = {
	tvShow: {
		title: string;
		release_date: string;
		number_episodes: number;
		overview: string;
		cover_url: string;
		trailer_url: string;
		directed_by: string;
		phase: number;
		saga: string;
		imdb_id: string;
	};
};

export async function getServerSideProps(context: any) {
	const { id } = context.query;

	const res = await fetch(`https://mcuapi.herokuapp.com/api/v1/tvshows/${id}`);
	const data = await res.json();

	return {
		props: { tvShow: data }
	};
}

const TvShows = ({ tvShow }: TvShowProps) => {
	return (
		<>
			<Head>
				<title>Marvel Cinematic Universe Guide - {tvShow.title}</title>
			</Head>
			<TvShowInfo tvShow={tvShow} />
		</>
	);
};

export default TvShows;
