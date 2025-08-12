import type { Metadata } from 'next'
import { sankofa, roboto, robotoMono } from './fonts'
import './globals.css'

export const metadata: Metadata = {
	title: 'FISHEATDUCK',
	description: "I'm a fish. I'm a duck. I'm a fish-eat-duck.",
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="en">
			<body
				className={`${sankofa.variable} ${roboto.variable} ${robotoMono.variable} antialiased`}
			>
				{children}
			</body>
		</html>
	)
}
