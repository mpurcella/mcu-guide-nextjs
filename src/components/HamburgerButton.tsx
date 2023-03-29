import React from 'react';
import classNames from 'classnames';

type HamburgerButtonProps = {
	isNavOpen: boolean;
	onClick: () => void;
};

function HamburgerButton({ isNavOpen, onClick }: HamburgerButtonProps) {
	return (
		<button
			type='button'
			className='flex h-24 w-28 flex-col justify-around focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-red lg:hidden'
			onClick={onClick}
		>
			<span
				className={classNames('h-3 w-full bg-white duration-200 ease-linear', {
					'translate-y-8 -rotate-45': isNavOpen
				})}
			></span>
			<span
				className={classNames('h-3 w-full bg-white duration-200 ease-linear', {
					'invisible opacity-0': isNavOpen
				})}
			></span>
			<span
				className={classNames('h-3 w-full bg-white duration-200 ease-linear', {
					'-translate-y-8 rotate-45': isNavOpen
				})}
			></span>
		</button>
	);
}

export default HamburgerButton;
