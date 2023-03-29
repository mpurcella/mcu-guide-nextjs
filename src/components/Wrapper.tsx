import React from 'react';

type WrapperProps = {
	width: 'narrow' | 'wide';
	children: React.ReactNode;
};

export const Wrapper = ({ width, children }: WrapperProps) => {
	if (width === 'narrow') {
		return <div className='m-auto max-w-screen-lg py-40 px-40'>{children}</div>;
	} else if (width === 'wide') {
		return <div className='py-40 px-40'>{children}</div>;
	} else {
		return null;
	}
};
