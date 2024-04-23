import React, { useRef, useEffect } from "react";

function Canvas() {
	const ref = useRef();
	useEffect(() => {
		const canvas = ref.current;
		const ctx = canvas.getContext("2d");
		canvas.height = 500;
		canvas.width = 500;

		const circleBrush = (center_x, center_y, radius, color) => {
			const circle = new Path2D();
			circle.arc(center_x, center_y, radius, 0, 2 * Math.PI);
			ctx.fillStyle = color;
			ctx.fill(circle);
		};
		circleBrush(100, 100, 20, "blue");
		circleBrush(200, 200, 50, "red");
		circleBrush(400, 300, 30, "gray");
	}, []);

	return (
		<canvas ref={ref} className="bg-caGray-10 h-[80%] max-h-96 aspect-square" />
	);
}

export { Canvas };
