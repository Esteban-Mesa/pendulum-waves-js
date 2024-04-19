import { TopBar } from "../topBar";
import { Canvas } from "../canvas";
import { ConsoleAnimator } from "../consoleAnimator";
import "./app.css";

function App() {
	return (
		<div className="app-layout">
			<TopBar />
			<Canvas />
			<ConsoleAnimator />
		</div>
	);
}

export default App;

{
	/* <div className="bg-red-300 w-full h-full">canvas</div> */
}
{
	/* <div className="bg-blue-500 w-[500px] h-full">consola</div> */
}
