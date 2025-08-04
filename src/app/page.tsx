import Image from 'next/image'

export default function Home() {
	return (
		<main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start text-4xl relative w-screen h-screen">
			<Image
				src="/FED_V2-bw.png"
				alt="FISHEATDUCK"
				fill
				className="object-contain object-center"
			/>
		</main>
	)
}
