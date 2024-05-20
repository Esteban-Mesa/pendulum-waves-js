import { useState } from "react";

function CircularPendulumWaveModule({ hash, module, changeDataModule }) {
	const [numberPendulums, setNumberPendulums] = useState(12);
	const [initialAngle, setInitialAngle] = useState(0);
	const [speed, setSpeed] = useState(1);
	const [size, setSize] = useState(5);
	const [initialGap, setInitialGap] = useState(20);
	const [gap, setGap] = useState(10);
	const [color, setColor] = useState("#000000");

	const pendulumsData = {
		numberPendulums: numberPendulums,
		initialAngle: initialAngle,
		size: size,
		initialGap: initialGap,
		gap: gap,
		color: color,
	};

	const pendulum = ({ angle = 0, radius = 0, size = 0, color = "black" }) => ({
		angle,
		radius,
		color,
		size,
		perimeter: 2 * Math.PI * radius,
	});

	const pendulumWave = ({
		numberPendulums,
		initialAngle,
		size,
		initialGap,
		gap,
		color,
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
			<h3>Circular pendulum wave {hash}</h3>
			<ul>
				<li>
					<span>numberPendulums:</span>
					<input
						className="text-black"
						type="number"
						value={numberPendulums}
						onChange={(event) => {
							let val = event.target.value;
							val = val === "" || val < 1 ? 1 : parseInt(val);
							let data = module;

							setNumberPendulums(val);
							pendulumsData.numberPendulums = val;

							data.pendulums = pendulumWave(pendulumsData);
							changeDataModule(hash, data);
						}}
						onClick={(event) => event.target.select()}
					/>
				</li>
				<li>
					<span>initialAngle:</span>
					<input
						className="text-black"
						type="number"
						value={initialAngle}
						onChange={(event) => {
							let val = event.target.value;
							val = val === "" ? 0 : parseInt(val);
							if (val < 0) {
								val = 360;
							}
							if (val > 360) {
								val -= 360;
							}

							let data = module;

							setInitialAngle(val);
							pendulumsData.initialAngle = val;

							data.pendulums = pendulumWave(pendulumsData);
							changeDataModule(hash, data);
						}}
						onClick={(event) => event.target.select()}
					/>
				</li>
				<li>
					<span>speed:</span>
					<input
						className="text-black"
						type="number"
						value={speed}
						onChange={(event) => {
							let val = event.target.value;
							val = val === "" ? 0 : parseInt(val);
							let data = module;

							setSpeed(val);
							data.speed = val;
							changeDataModule(hash, data);
						}}
						onClick={(event) => event.target.select()}
					/>
				</li>
				<li>
					<span>size:</span>
					<input
						className="text-black"
						type="number"
						value={size}
						onChange={(event) => {
							let val = event.target.value;
							val = val === "" || val < 1 ? 1 : parseInt(val);
							let data = module;

							setSize(val);

							data.pendulums.map((item) => {
								item.size = val;
							});
							changeDataModule(hash, data);
						}}
						onClick={(event) => event.target.select()}
					/>
				</li>
				<li>
					<span>initialGap:</span>
					<input
						className="text-black"
						type="number"
						value={initialGap}
						onChange={(event) => {
							let val = event.target.value;
							val = val === "" || val < 0 ? 0 : parseInt(event.target.value);
							let data = module;

							setInitialGap(val);
							pendulumsData.initialGap = val;
							const pw = pendulumWave(pendulumsData);
							data.pendulums.map((item, index) => {
								item.radius = pw[index].radius;
								item.perimeter = pw[index].perimeter;
							});
							changeDataModule(hash, data);
						}}
						onClick={(event) => event.target.select()}
					/>
				</li>
				<li>
					<span>gap:</span>
					<input
						className="text-black"
						type="number"
						value={gap}
						onChange={(event) => {
							let val = event.target.value;
							val = val === "" || val < 1 ? 1 : parseInt(event.target.value);
							let data = module;

							setGap(val);
							pendulumsData.gap = val;
							const pw = pendulumWave(pendulumsData);
							data.pendulums.map((item, index) => {
								item.radius = pw[index].radius;
								item.perimeter = pw[index].perimeter;
							});
							changeDataModule(hash, data);
						}}
						onClick={(event) => event.target.select()}
					/>
				</li>
				<li>
					<span>color:</span>
					<input
						type="color"
						value={color}
						onChange={(event) => {
							let val = event.target.value;
							let data = module;
							data.color = val;

							setColor(val);

							data.pendulums.map((item) => {
								item.color = val;
							});
							changeDataModule(hash, data);
						}}
					/>
				</li>
			</ul>
		</li>
	);
}

export { CircularPendulumWaveModule };
