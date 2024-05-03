import React, {
	useRef,
	useState,
	useLayoutEffect,
	useEffect,
	useContext,
} from "react";
import { draw, update } from "../utils/animatorEngine";
import { ConcentricContext } from "../context/ConcentricContext";

function Canvas() {
	const { moduleAnimationList, setModuleAnimationList, pauseAnimation } =
		useContext(ConcentricContext);

	const [counter, setCounter] = useState(0);

	const ref = useRef();

	useLayoutEffect(() => {
		if (!pauseAnimation) {
			let timerId;

			const animate = () => {
				setCounter((c) => c + 1);
				timerId = requestAnimationFrame(animate);
			};
			timerId = requestAnimationFrame(animate);
			return () => cancelAnimationFrame(timerId);
		}
	}, [pauseAnimation]);

	useEffect(() => {
		const canvas = ref.current;
		const ctx = canvas.getContext("2d");
		canvas.height = 500;
		canvas.width = 500;

		ctx.clearRect(0, 0, canvas.width, canvas.height);

		draw(moduleAnimationList, canvas, ctx);

		const items = update(moduleAnimationList);
		setModuleAnimationList(items);
	}, [counter]);

	return (
		<canvas ref={ref} className="bg-caGray-10 h-[80%] max-h-96 aspect-square" />
	);
}

export { Canvas };
