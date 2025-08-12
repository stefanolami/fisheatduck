import type { Metadata } from 'next'
import { sankofa, roboto, robotoMono } from './fonts'
import './globals.css'

export const metadata: Metadata = {
	title: 'FISHEATDUCK',
	description: 'VFX',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="en">
			<head>
				<link
					rel="preload"
					href="/FED_V3_alpha_avatar.png"
					as="image"
				/>
			</head>
			<body
				className={`${sankofa.variable} ${roboto.variable} ${robotoMono.variable} antialiased`}
			>
				{children}
			</body>
		</html>
	)
}
