import React from 'react';

type ButtonLinkProps = {
	url: string;
	className: string;
	icon?: React.ReactNode;
	label: string;
};

export const ButtonLink = ({ url, className, icon, label }: ButtonLinkProps) => {
	return (
		<a
			href={url}
			className={className}
			target='_blank'
			rel='noopener noreferrer'
		>
			{icon && <span>{icon}</span>}
			{label}
		</a>
	);
};
