import React, { useRef, useEffect } from "react";
import { draw, update } from "../utils/animatorEngine";

function Canvas() {
	const ref = useRef();
	useEffect(() => {
		const canvas = ref.current;
		const ctx = canvas.getContext("2d");
		canvas.height = 500;
		canvas.width = 500;

		const ball = [
			{ center_x: 10, center_y: 300, radius: 20, color: "red" },
			{ center_x: 10, center_y: 400, radius: 10, color: "blue" },
		];

		function renderAnimation() {
			ctx.clearRect(0, 0, canvas.width, canvas.height);
			draw(ball, canvas, ctx);
			update(ball);
			requestAnimationFrame(renderAnimation);
		}

		requestAnimationFrame(renderAnimation);
	}, []);

	return (
		<canvas ref={ref} className="bg-caGray-10 h-[80%] max-h-96 aspect-square" />
	);
}

export { Canvas };
