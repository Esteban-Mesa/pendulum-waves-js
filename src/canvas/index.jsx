import PlayBar from "./PlayBar";

function Canvas() {
	return (
		<main className="bg-caGray-30 flex flex-col items-center justify-center">
			<canvas
				width={500}
				height={500}
				className="bg-caGray-10 h-[80%] max-h-96 aspect-square"></canvas>
			<PlayBar />
		</main>
	);
}

export { Canvas };
