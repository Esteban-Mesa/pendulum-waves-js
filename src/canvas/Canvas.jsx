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
	const { nodeAnimatorList, moduleAnimationList, setModuleAnimationList } =
		useContext(ConcentricContext);

	const [counter, setCounter] = useState(0);
	const [shouldStop, setShouldStop] = useState(true);

	const ref = useRef();
	const ball = [
		{ center_x: 10, center_y: 300, radius: 20, color: "red" },
		{ center_x: 10, center_y: 400, radius: 10, color: "blue" },
		{
			center_x: 10,
			center_y: nodeAnimatorList[0],
			radius: 10,
			color: nodeAnimatorList[1],
		},
	];

	useLayoutEffect(() => {
		if (!shouldStop) {
			let timerId;

			const animate = () => {
				setCounter((c) => c + 1);
				timerId = requestAnimationFrame(animate);
			};
			timerId = requestAnimationFrame(animate);
			return () => cancelAnimationFrame(timerId);
		}
	}, [shouldStop]);

	useEffect(() => {
		const canvas = ref.current;
		const ctx = canvas.getContext("2d");
		canvas.height = 500;
		canvas.width = 500;

		ctx.clearRect(0, 0, canvas.width, canvas.height);

		draw(moduleAnimationList, canvas, ctx);
		draw(ball, canvas, ctx);
		update(ball);
		// update(modulesAnimation);

		const items = moduleAnimationList.map((item) => {
			if (item.type === "circle") {
				if (item.module.center_x > 500) {
					item.module.direction = "l";
				} else if (item.module.center_x < 1) {
					item.module.direction = "r";
				}

				if (item.module.direction === "r") {
					item.module.center_x += 1;
				} else if (item.module.direction === "l") {
					item.module.center_x += -1;
				}
			}

			return item;
		});
		setModuleAnimationList(items);
	}, [counter]);

	return (
		<canvas ref={ref} className="bg-caGray-10 h-[80%] max-h-96 aspect-square" />
	);
}

export { Canvas };
