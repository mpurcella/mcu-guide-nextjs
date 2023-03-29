import { useEffect, useState } from 'react';
import Link from 'next/link';
import HamburgerButton from './HamburgerButton';
import { NavList } from './NavList';

type HeaderProps = {
	width: number | undefined;
};

export const Header = () => {
	const [isNavOpen, setIsNavOpen] = useState(false);

	const handleIsNavOpen = () => {
		setIsNavOpen((prevIsNavOpen) => !prevIsNavOpen);
	};

	const closeNav = () => {
		setIsNavOpen(false);
	};

	// Function to calculate window width
	const useWindowWidth = (): HeaderProps => {
		const [windowWidth, setWindowWidth] = useState<HeaderProps>({
			width: undefined
		});

		useEffect(() => {
			const handleResize = () => {
				setWindowWidth({
					width: window.innerWidth
				});
			};
			handleResize();

			window.addEventListener('resize', handleResize);

			return () => {
				window.removeEventListener('resize', handleResize);
			};
		}, []);

		return windowWidth;
	};

	const { width } = useWindowWidth();

	// Update state of nav menu if screen width is > 1023px or undefined
	useEffect(() => {
		if (width === undefined) {
			return;
		} else if (width > 1023) {
			setIsNavOpen(false);
		}
	}, [width]);

	// Disable scroll when nav menu is open
	useEffect(() => {
		if (isNavOpen) {
			document.body.classList.add('overflow-hidden');
		}

		return () => {
			document.body.classList.remove('overflow-hidden');
		};
	}, [isNavOpen]);

	return (
		<header className='relative z-40 bg-black-300 px-20 py-12 md:px-40'>
			<nav className='flex items-center justify-between'>
				<Link
					href='/'
					className='focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-red'
				>
					<img
						src='/images/marvel-logo.png'
						alt='Marvel Logo'
						className='h-40 w-100 md:w-120'
						onClick={closeNav}
					/>
				</Link>
				<HamburgerButton
					isNavOpen={isNavOpen}
					onClick={handleIsNavOpen}
				/>
				<NavList
					isNavOpen={isNavOpen}
					onClick={closeNav}
				/>
			</nav>
		</header>
	);
};
