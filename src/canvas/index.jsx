import { PlayBar } from "./PlayBar";
import { Canvas } from "./Canvas";

function CanvasContainer() {
	return (
		<main className="bg-caGray-30 flex flex-col items-center justify-center">
			<Canvas />
			<PlayBar />
		</main>
	);
}

export { CanvasContainer };
