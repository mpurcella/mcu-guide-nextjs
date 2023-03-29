export const Footer = () => {
	const year = new Date().getFullYear();
	return (
		<footer className='flex justify-center bg-black-300 p-20'>
			<p className='text-center font-roboto-flex text-12 uppercase leading-tight tracking-tight text-grey-200'>
				&copy; {year} Marvel Cinematic Universe Guide. All rights reserved.
			</p>
		</footer>
	);
};
