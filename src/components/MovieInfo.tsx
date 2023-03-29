import React from 'react';
import { Wrapper } from './Wrapper';
import { ButtonLink } from './ButtonLink';
import { FaExternalLinkAlt, FaPlay } from 'react-icons/fa';
import { RelatedMoviesList } from './RelatedMoviesList';

type MovieInfoProps = {
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

export const MovieInfo = ({ movie }: MovieInfoProps) => {
	const formattedDate = new Date(movie.release_date).toLocaleString('en-us', {
		year: 'numeric',
		month: 'numeric',
		day: 'numeric'
	});

	return (
		<div className='flex flex-col'>
			<section>
				<Wrapper width='narrow'>
					<div className='flex flex-col gap-40 font-roboto-flex tracking-tight md:grid md:grid-cols-12'>
						<div className='md:col-span-5'>
							<img
								src={movie.cover_url}
								alt={movie.title}
								className='m-auto w-full max-w-480 shadow-lg shadow-black-300/40'
							/>
						</div>
						<div className='flex flex-col gap-32 md:col-span-7'>
							<div className='flex flex-col gap-12'>
								<h1 className='text-24 font-extrabold uppercase md:text-28'>
									{movie.title}
								</h1>
								<div className='flex gap-6 text-14'>
									<h2 className='font-semibold uppercase'>Directed By:</h2>
									<p className='font-light'>
										{movie.directed_by === '' ? 'TBD' : movie.directed_by}
									</p>
								</div>
							</div>
							<div className='flex flex-col gap-8 text-14'>
								<div className='flex gap-6'>
									<h2 className='font-semibold uppercase'>Release Date:</h2>
									<p className='font-light'>
										{movie.release_date === null ? 'TBD' : formattedDate}
									</p>
								</div>
								<div className='flex gap-6'>
									<h2 className='font-semibold uppercase'>Runtime:</h2>
									<p className='font-light'>
										{movie.duration === 0 ? 'TBD' : movie.duration}
									</p>
								</div>
							</div>
							{movie.overview === null ? null : (
								<p className='font-light leading-loose'>{movie.overview}</p>
							)}
							<div className='flex flex-col gap-8 text-14'>
								<div className='flex gap-6'>
									<h2 className='font-semibold uppercase'>Post Credit Scenes:</h2>
									<p className='font-light'>{movie.post_credit_scenes}</p>
								</div>
								<div className='flex gap-6'>
									<h2 className='font-semibold uppercase'>
										Chronological Order:
									</h2>
									<p className='font-light'>{movie.chronology}</p>
								</div>
								<div className='flex gap-6'>
									<h2 className='font-semibold uppercase'>Phase:</h2>
									<p className='font-light'>{movie.phase}</p>
								</div>
								<div className='flex gap-6'>
									<h2 className='font-semibold uppercase'>Saga:</h2>
									<p className='font-light'>{movie.saga}</p>
								</div>
							</div>
						</div>
						<div className='flex flex-col items-center gap-20 md:col-span-12 md:flex-row md:justify-center'>
							{movie.trailer_url === null || '' ? null : (
								<ButtonLink
									url={movie.trailer_url}
									className='button-link-primary'
									icon={<FaPlay />}
									label='Watch Trailer'
								/>
							)}
							<ButtonLink
								url={`https://www.imdb.com/title/${movie.imdb_id}/`}
								className='button-link-secondary'
								icon={<FaExternalLinkAlt />}
								label='View on IMDB'
							/>
						</div>
					</div>
				</Wrapper>
			</section>
			{movie.related_movies.length === 0 ? null : (
				<section className='flex flex-col items-center before:relative before:block before:h-1 before:w-[calc(100vw-80px)] before:bg-black-300/30 before:content-[""]'>
					<Wrapper width='wide'>
						<div className='col-span-12 flex flex-col gap-40'>
							<h3 className='font-roboto-flex text-20 font-semibold uppercase tracking-tight'>
								Related Movies
							</h3>
							<RelatedMoviesList relatedMovies={movie.related_movies} />
						</div>
					</Wrapper>
				</section>
			)}
		</div>
	);
};
