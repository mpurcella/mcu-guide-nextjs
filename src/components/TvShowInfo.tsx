import React from 'react';
import { Wrapper } from './Wrapper';
import { ButtonLink } from './ButtonLink';
import { FaExternalLinkAlt, FaPlay } from 'react-icons/fa';

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

export const TvShowInfo = ({ tvShow }: TvShowProps) => {
	const formattedDate = new Date(tvShow.release_date).toLocaleString('en-us', {
		year: 'numeric',
		month: 'numeric',
		day: 'numeric'
	});

	return (
		<section>
			<Wrapper width='narrow'>
				<div className='flex flex-col gap-40 font-roboto-flex tracking-tight md:grid md:grid-cols-12'>
					<div className='md:col-span-5'>
						<img
							src={tvShow.cover_url}
							alt={tvShow.title}
							className='shadow-lg shadow-black-300/40'
						/>
					</div>
					<div className='flex flex-col gap-32 md:col-span-7'>
						<div className='flex flex-col gap-12'>
							<h1 className='text-24 font-extrabold uppercase md:text-28'>
								{tvShow.title}
							</h1>
							<div className='flex gap-6 text-14'>
								<h2 className='font-semibold uppercase'>Directed By:</h2>
								<p className='font-light'>
									{tvShow.directed_by === null ? 'TBD' : tvShow.directed_by}
								</p>
							</div>
						</div>
						<div className='flex flex-col gap-8 text-14'>
							<div className='flex gap-6'>
								<h2 className='font-semibold uppercase'>Release Date:</h2>
								<p className='font-light'>
									{tvShow.release_date === null ? 'TBD' : formattedDate}
								</p>
							</div>
							<div className='flex gap-6'>
								<h2 className='font-semibold uppercase'>Episodes:</h2>
								<p className='font-light'>
									{tvShow.number_episodes === 0 ? 'TBD' : tvShow.number_episodes}
								</p>
							</div>
						</div>
						{tvShow.overview === null ? null : (
							<p className='font-light leading-loose'>{tvShow.overview}</p>
						)}
						<div className='flex flex-col gap-8 text-14'>
							<div className='flex gap-6'>
								<h2 className='font-semibold uppercase'>Phase:</h2>
								<p className='font-light'>{tvShow.phase}</p>
							</div>
							<div className='flex gap-6'>
								<h2 className='font-semibold uppercase'>Saga:</h2>
								<p className='font-light'>{tvShow.saga}</p>
							</div>
						</div>
					</div>
					<div className='flex flex-col items-center gap-20 md:col-span-12 md:flex-row md:justify-center'>
						{tvShow.trailer_url === null ? null : (
							<ButtonLink
								url={tvShow.trailer_url}
								className='button-link-primary'
								icon={<FaPlay />}
								label='Watch Trailer'
							/>
						)}
						<ButtonLink
							url={`https://www.imdb.com/title/${tvShow.imdb_id}/`}
							className='button-link-secondary'
							icon={<FaExternalLinkAlt />}
							label='View on IMDB'
						/>
					</div>
				</div>
			</Wrapper>
		</section>
	);
};
