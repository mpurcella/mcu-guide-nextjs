import Head from 'next/head';
import React from 'react';
import { MovieInfo } from '../../components/MovieInfo';

type MovieProps = {
	movie: {
		title: string;
		release_date: string;
		duration: number;
		overview: string;
		cover_url: string;
		trailer_url: string;
		directed_by: string;
		phase: number;
		saga: string;
		chronology: number;
		post_credit_scenes: number;
		imdb_id: string;
		related_movies: Array<{
			id: number;
			title: string;
			release_date: string;
			cover_url: string;
		}>;
	};
};

export async function getServerSideProps(context: any) {
	const { id } = context.query;

	const res = await fetch(`https://mcuapi.herokuapp.com/api/v1/movies/${id}`);
	const data = await res.json();

	return {
		props: { movie: data }
	};
}

const Movie = ({ movie }: MovieProps) => {
	return (
		<>
			<Head>
				<title>Marvel Cinematic Universe Guide - {movie.title}</title>
			</Head>
			<MovieInfo movie={movie} />
		</>
	);
};

export default Movie;
