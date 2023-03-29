import classNames from 'classnames';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { v4 as uuidv4 } from 'uuid';

type NavListProps = {
	isNavOpen: boolean;
	onClick: () => void;
};

export const NavList = ({ isNavOpen, onClick }: NavListProps) => {
	const router = useRouter();
	const currentRoute = router.pathname;

	const navLinks = [
		{
			label: 'Home',
			url: '/',
			id: uuidv4()
		},
		{
			label: 'Movies',
			url: '/movies',
			id: uuidv4()
		},
		{
			label: 'TV Shows',
			url: '/tv-shows',
			id: uuidv4()
		}
	];

	return (
		<ul
			className={classNames(
				'fixed top-64 flex h-[calc(100vh-64px)] w-full flex-col items-center justify-center gap-40 bg-black-200 nav-list-transition lg:static lg:h-auto lg:flex-row lg:justify-end lg:bg-transparent',
				{
					'right-full': !isNavOpen,
					'right-0': isNavOpen
				}
			)}
		>
			{navLinks.map((navLink) => {
				return (
					<li key={navLink.id}>
						<Link
							href={navLink.url}
							className={
								currentRoute === navLink.url
									? 'navlink-primary-active'
									: 'navlink-primary'
							}
							onClick={onClick}
						>
							{navLink.label}
						</Link>
					</li>
				);
			})}
		</ul>
	);
};
