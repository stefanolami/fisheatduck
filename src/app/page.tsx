import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
	return (
		<main className="relative w-screen h-screen bg-[#484848]/50 pt-16 sm:pt-14 md:pt-12 lg:pt-10">
			<div className="aspect-[183/33] w-1/2 sm:w-2/5 md:w-1/3 lg:w-1/4 xl:w-[17%] mx-auto relative">
				<Image
					src="/social-media.png"
					alt="Social media icons"
					fill
					priority
					sizes="50vw"
					className="pointer-events-none select-none"
					draggable={false}
				/>
				{/* Clickable quadrants overlay (left-to-right) */}
				<Link
					href="https://www.imdb.com/name/nm7620730/"
					target="_blank"
					rel="noopener noreferrer"
					aria-label="Open IMDB"
					className="absolute inset-y-0 left-0 w-1/4 z-10"
				>
					<span className="sr-only">IMDB</span>
				</Link>
				<Link
					href="https://soundcloud.com/fisheatduck"
					target="_blank"
					rel="noopener noreferrer"
					aria-label="Open Soundcloud"
					className="absolute inset-y-0 left-1/4 w-1/4 z-10"
				>
					<span className="sr-only">Soundcloud</span>
				</Link>
				<Link
					href="https://www.linkedin.com/in/tim-marchant-15659011"
					target="_blank"
					rel="noopener noreferrer"
					aria-label="Open Linkedin"
					className="absolute inset-y-0 left-2/4 w-1/4 z-10"
				>
					<span className="sr-only">Linkedin</span>
				</Link>
				<Link
					href="https://www.youtube.com/@fisheatduck"
					target="_blank"
					rel="noopener noreferrer"
					aria-label="Open YouTube"
					className="absolute inset-y-0 left-3/4 w-1/4 z-10"
				>
					<span className="sr-only">YouTube</span>
				</Link>
			</div>
			<Image
				src="/FED_V4.png"
				alt="FISHEATDUCK"
				fill
				priority
				sizes="50vw"
				className="object-contain object-center"
			/>
			<span className="block text-3xl text-center absolute left-1/2 -translate-x-1/2 bottom-[18%] font-sankofa text-[#fff2f2]">
				info@fisheatduck.com
			</span>
			<Link
				href="https://en.wikipedia.org/wiki/Platypus"
				target="_blank"
			>
				<span className="block text-xs text-center absolute left-1/2 -translate-x-1/2 bottom-[14%] font-roboto text-black">
					I&apos;m confused
				</span>
			</Link>
			<span className="block text-2xl lg:text-3xl text-center absolute left-1/2 -translate-x-1/2 bottom-[8%] font-roboto-mono text-[#484848]">
				info@fisheatduck.com
			</span>
			<Image
				src="/noisy.svg"
				alt="FISHEATDUCK"
				fill
				className="object-cover object-center absolute top-0 left-0 z-[-1]"
			/>
		</main>
	)
}
