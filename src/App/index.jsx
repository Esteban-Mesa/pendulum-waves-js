import { TopBar } from "../topBar";
import { Canvas } from "../canvas";
import { ConsoleAnimator } from "../consoleAnimator";
import { ConcentricProvider } from "../context/ConcentricContext";
import "./app.css";

function App() {
	return (
		<ConcentricProvider>
			<div className="app-layout">
				<TopBar />
				<Canvas />
				<ConsoleAnimator />
			</div>
		</ConcentricProvider>
	);
}

export default App;
