import { Sankofa_Display, Roboto, Roboto_Mono } from 'next/font/google'

export const sankofa = Sankofa_Display({
	weight: ['400'],
	style: ['normal'],
	subsets: ['latin'],
	display: 'swap',
	variable: '--font-sankofa',
})

export const roboto = Roboto({
	weight: ['400', '500', '700'],
	style: ['normal'],
	subsets: ['latin'],
	display: 'swap',
	variable: '--font-roboto',
})

export const robotoMono = Roboto_Mono({
	weight: ['400', '500', '700'],
	style: ['normal'],
	subsets: ['latin'],
	display: 'swap',
	variable: '--font-roboto-mono',
})
