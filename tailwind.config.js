const { fontFamily } = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			maxWidth: {
				480: '30rem'
			},
			opacity: {
				15: '.15'
			},
			scale: {
				102: '1.02'
			}
		},
		colors: {
			black: {
				100: '#181818',
				200: '#141414',
				300: '#101010'
			},
			grey: {
				100: '#c8c8c8',
				200: '#a9a9a9'
			},
			red: '#ec1d24',
			transparent: 'transparent',
			white: '#f2f2f2'
		},
		fontFamily: {
			'open-sans': ['var(--font-open-sans)', ...fontFamily.sans],
			oswald: ['var(--font-oswald)', ...fontFamily.sans],
			'roboto-flex': ['var(--font-roboto-flex)', ...fontFamily.sans]
		},
		fontSize: {
			12: '0.75rem',
			14: '0.875rem',
			18: '1.125rem',
			20: '1.25rem',
			24: '1.5rem',
			28: '1.75rem',
			36: '2.25rem'
		},
		spacing: {
			0: '0rem',
			1: '0.063rem',
			3: '.188rem',
			6: '.375rem',
			8: '.5rem',
			12: '.75rem',
			16: '1rem',
			20: '1.25rem',
			24: '1.5rem',
			28: '1.75rem',
			32: '2rem',
			40: '2.5rem',
			64: '4rem',
			100: '6.25rem',
			120: '7.5rem',
			full: '100%',
			screen: '100vh'
		}
	},
	plugins: [
		({ addComponents, addUtilities, addBase }) => {
			const buttonLinkBase =
				'uppercase px-32 py-16 border border-black-300 inline-flex gap-12 transition-colors text-14 duration-200 ease-linear font-medium';
			const navLinkBase =
				'font-roboto-flex tracking-tight text-20 uppercase lg:text-14 border-y-2 border-transparent hover:border-b-red navlink-transition lg:font-medium focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-red';

			addComponents({
				'.button-link': {
					'&-primary': {
						[`@apply ${buttonLinkBase} bg-black-300 text-white hover:bg-red hover:border-red outline-none focus-visible:border-red focus-visible:bg-red`]:
							{}
					},
					'&-secondary': {
						[`@apply ${buttonLinkBase} bg-transparent hover:bg-grey-100 hover:border-grey-100 focus-visible:border-grey-100 focus-visible:bg-grey-100 outline-none`]:
							{}
					}
				},
				'.navlink': {
					'&-primary': {
						[`@apply ${navLinkBase} text-grey-200`]: {}
					},
					'&-primary-active': {
						[`@apply ${navLinkBase} border-b-red text-white`]: {}
					}
				}
			});
			addUtilities({
				'.navlink-transition': {
					transition: 'border .2s linear'
				},
				'.nav-list-transition': {
					transition: 'right .2s linear'
				},
				'.scrollbar-none': {
					scrollbarWidth: 'none',
					'&::-webkit-scrollbar': {
						display: 'none'
					}
				},
				'.text-shadow': {
					'text-shadow': '1px 1px 4px #101010'
				},
				'.text-shadow-none': {
					'text-shadow': 'none'
				}
			});
			addBase({
				body: {
					'@apply leading-none text-black-300 antialiased scrollbar-none bg-white': {}
				}
			});
		}
	]
};
