import React from 'react';
import { MediaCard } from './MediaCard';

type MediaCardListProps = {
	data: Array<{
		id: number;
		title: string;
		release_date: string;
		cover_url: string;
	}>;
	basePath: string;
};

export const MediaCardList = ({ data, basePath }: MediaCardListProps) => {
	return (
		<ul className='grid grid-cols-1 gap-40 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:gap-24 xl:grid-cols-5'>
			{data.map((media) => {
				return (
					<li key={media.id}>
						<MediaCard
							url={`${basePath}/${media.id}`}
							imgUrl={media.cover_url}
							alt={media.title}
							title={media.title}
							releaseDate={media.release_date}
						/>
					</li>
				);
			})}
		</ul>
	);
};
