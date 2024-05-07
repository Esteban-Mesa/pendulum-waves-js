import { useState } from "react";

function CircularPendulumWaveModule({ hash, module, changeDataModule }) {
	const data = {
		numberPendulums: 12,
		initialAngle: 0,
		size: 5,
		initialGap: 0,
		gap: 0,
		color: "#000000",
	};

	const [numberPendulums, setNumberPendulums] = useState(1);
	const [initialAngle, setInitialAngle] = useState(0);
	const [size, setSize] = useState(10);
	const [initialGap, setInitialGap] = useState(0);
	const [gap, setGap] = useState(20);
	const [setColor, setsetColor] = useState("#000000");

	const pendulum = ({ angle = 0, radius = 0, size = 0, color = "black" }) => ({
		angle,
		radius,
		color,
		size,
		perimeter: 2 * Math.PI * radius,
	});

	const pendulumWave = ({
		numberPendulums = 12,
		initialAngle = 0,
		size = 5,
		initialGap = 20,
		gap = 10,
		color = "#000000",
	}) => {
		let group = [];

		for (let i = 0; i < numberPendulums; i++) {
			const p = pendulum({
				angle: initialAngle,
				radius: initialGap + gap * i,
				size: size,
				color: color,
			});
			group.push(p);
		}

		return group;
	};

	return (
		<li className="bg-caGray-60 text-caGray-10 mb-2 p-2">
			<h3>Circular pendulum wave</h3>
			<ul>
				<li>
					<span>numberPendulums:</span>
					<input type="text" />
				</li>
			</ul>
			<ul>
				<li>
					<span>initialAngle:</span>
					<input type="text" />
				</li>
			</ul>
			<ul>
				<li>
					<span>size:</span>
					<input type="text" />
				</li>
			</ul>
			<ul>
				<li>
					<span>initialGap:</span>
					<input type="text" />
				</li>
			</ul>
			<ul>
				<li>
					<span>gap:</span>
					<input type="text" />
				</li>
			</ul>
			<ul>
				<li>
					<span>color:</span>
					<input type="color" />
				</li>
			</ul>
		</li>
	);
}

export { CircularPendulumWaveModule };
