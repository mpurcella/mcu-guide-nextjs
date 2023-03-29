import React from 'react';
import { MediaCard } from './MediaCard';

type RelatedMoviesListProps = {
	relatedMovies: Array<{
		id: number;
		title: string;
		release_date: string;
		cover_url: string;
	}>;
};

export const RelatedMoviesList = ({ relatedMovies }: RelatedMoviesListProps) => {
	return (
		<ul className='grid grid-cols-1 gap-40 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:gap-24'>
			{relatedMovies.map((movie) => {
				return (
					<li key={movie.id}>
						<MediaCard
							url={`${movie.id}`}
							imgUrl={movie.cover_url}
							alt={movie.title}
							title={movie.title}
							releaseDate={movie.release_date}
						/>
					</li>
				);
			})}
		</ul>
	);
};
