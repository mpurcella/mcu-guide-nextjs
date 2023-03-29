import React from 'react';
import { Footer } from './Footer';
import { Header } from './Header';

type LayoutProps = {
	className: string;
	children: React.ReactNode;
};

export const Layout = ({ className, children }: LayoutProps) => {
	return (
		<div className={className}>
			<Header />
			{children}
			<Footer />
		</div>
	);
};
