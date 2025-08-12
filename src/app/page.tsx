import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
	return (
		<main className="relative w-screen h-screen bg-[#484848]/50 text-[#fff2f2]">
			<Image
				src="/FED_V3_alpha_avatar.png"
				alt="FISHEATDUCK"
				fill
				priority
				sizes="50vw"
				className="object-contain object-center"
			/>
			<span className="block text-3xl text-center absolute left-1/2 -translate-x-1/2 bottom-[18%] font-sankofa">
				info@fisheatduck.com
			</span>
			<Link
				href="https://en.wikipedia.org/wiki/Platypus"
				target="_blank"
			>
				<span className="block text-xs text-center absolute left-1/2 -translate-x-1/2 bottom-[14%] font-roboto">
					I&apos;m confused
				</span>
			</Link>
			<span className="block text-3xl text-center absolute left-1/2 -translate-x-1/2 bottom-[8%] font-roboto-mono">
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
