import React from 'react';

export const Hero = () => {
	return (
		<div className='relative flex h-[calc(100vh-64px)] w-full items-center justify-center bg-black-200'>
			<img
				src='/images/avengers.png'
				alt='Thor, Wolverine, Black Widow, Iron Man, Captain America, The Hulk, Spider Man, and the Human Torch in fighting stances.'
				className='m-auto h-full object-cover opacity-15'
			/>
			<div className='absolute max-w-screen-sm p-40'>
				<h1 className='text-center font-open-sans text-24 font-bold uppercase leading-snug tracking-tighter text-white text-shadow md:text-36'>
					The{' '}
					<span className='bg-red px-8 text-black-300 text-shadow-none'>ultimate</span>{' '}
					guide to the Marvel Cinematic&nbsp;Universe
				</h1>
			</div>
		</div>
	);
};
