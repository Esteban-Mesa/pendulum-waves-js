import { useState } from "react";

function CircleModule({ hash, module, changeDataModule }) {
	const [center_x, setCenter_x] = useState(0);
	const [center_y, setCenter_y] = useState(0);
	const [radius, setRadius] = useState(10);
	const [color, setColor] = useState("#000000");

	return (
		<li className="bg-caGray-60 text-caGray-10 mb-2 p-2">
			<h3>Circulo{` ${hash}`}</h3>
			<ul>
				<li>
					<span>x:</span>
					<input
						className="text-black"
						type="number"
						value={center_x}
						onChange={(event) => {
							let val =
								event.target.value === "" ? 0 : parseInt(event.target.value);
							let data = module;

							setCenter_x(val);
							data.center_x = val;
							changeDataModule(hash, data);
						}}
						onClick={(event) => event.target.select()}
					/>
				</li>
				<li>
					<span>y:</span>
					<input
						type="number"
						value={center_y}
						className="text-black"
						onChange={(event) => {
							let val =
								event.target.value === "" ? 0 : parseInt(event.target.value);
							let data = module;

							setCenter_y(val);
							data.center_y = val;
							changeDataModule(hash, data);
						}}
						onClick={(event) => event.target.select()}
					/>
				</li>
				<li>
					<span>radius:</span>
					<input
						type="number"
						value={radius}
						className="text-black"
						onChange={(event) => {
							let val =
								event.target.value === "" ? 0 : parseInt(event.target.value);
							let data = module;

							setRadius(val);
							data.radius = val;
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
						className="text-black"
						onChange={(event) => {
							let val = event.target.value;
							let data = module;
							data.color = val;

							setColor(val);
							changeDataModule(hash, data);
						}}
					/>
				</li>
			</ul>
		</li>
	);
}

export { CircleModule };
