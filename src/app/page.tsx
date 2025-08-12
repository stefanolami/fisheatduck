import Image from 'next/image'

export default function Home() {
	return (
		<main className="relative w-screen h-screen bg-[#C6C6C6]/50">
			<Image
				src="/FED_V3_alpha_avatar.png"
				alt="FISHEATDUCK"
				fill
				priority
				className="object-contain object-center"
			/>
			<span className="block text-3xl text-center absolute left-1/2 -translate-x-1/2 bottom-[18%] font-sankofa">
				info@fisheatduck.com
			</span>
			<span className="block text-3xl text-center absolute left-1/2 -translate-x-1/2 bottom-[13%] font-roboto">
				info@fisheatduck.com
			</span>
			<span className="block text-3xl text-center absolute left-1/2 -translate-x-1/2 bottom-[8%] font-roboto-mono">
				info@fisheatduck.com
			</span>
			<Image
				src="/grainy.svg"
				alt="FISHEATDUCK"
				fill
				className="object-cover object-center absolute top-0 left-0 z-[-1]"
			/>
		</main>
	)
}
