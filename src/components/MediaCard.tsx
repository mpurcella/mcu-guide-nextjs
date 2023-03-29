import Link from 'next/link';
import React from 'react';

type MediaCardProps = {
	url: string;
	imgUrl: string;
	alt: string;
	title: string;
	releaseDate: string;
};

export const MediaCard = ({ url, imgUrl, alt, title, releaseDate }: MediaCardProps) => {
	const formattedDate = new Date(releaseDate).toLocaleString('en-us', {
		year: 'numeric'
	});

	return (
		<Link
			href={url}
			className='group flex flex-col gap-16 outline-none transition-transform duration-200 ease-linear lg:relative lg:bg-black-300 lg:shadow-lg lg:shadow-black-300/40 lg:hover:scale-102 lg:focus-visible:scale-102'
		>
			<img
				src={imgUrl}
				alt={alt}
				className='shadow-lg shadow-black-300/40 transition-transform duration-200 ease-linear group-hover:scale-102 group-focus-visible:scale-102 lg:shadow-none lg:group-hover:transform-none lg:group-focus-visible:transform-none'
			/>
			<div className='flex flex-col gap-12 transition-colors duration-200 ease-linear lg:absolute lg:h-full lg:w-full lg:items-center lg:justify-center lg:p-20 lg:group-hover:bg-black-300/90 lg:group-focus-visible:bg-black-300/90'>
				<h2 className='font-roboto-flex text-14 font-bold uppercase leading-tight tracking-tight transition-all duration-200 ease-linear group-hover:text-red group-focus-visible:text-red lg:text-center lg:opacity-0 lg:group-hover:text-white lg:group-hover:opacity-100 lg:group-focus-visible:text-white lg:group-focus-visible:opacity-100'>
					{title}
				</h2>
				<p className='font-roboto-flex text-14 font-light tracking-tight transition-all duration-200 ease-linear lg:opacity-0 lg:group-hover:text-white lg:group-hover:opacity-100 lg:group-focus-visible:text-white lg:group-focus-visible:opacity-100'>
					{releaseDate === null ? 'TBD' : formattedDate}
				</p>
			</div>
		</Link>
	);
};
