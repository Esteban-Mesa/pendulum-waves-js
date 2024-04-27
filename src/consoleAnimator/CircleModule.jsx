function CircleModule({ type, hash, module, changeDataModule }) {
	const { center_x, center_y, radius, color } = module;

	return (
		<li className="bg-caGray-60 text-caGray-10 mb-2 p-2">
			<h3>Circulo{` ${hash}`}</h3>
			<ul>
				<li>
					<span>x:</span>
					<input
						type="number"
						value={center_x}
						className="text-black"
						onChange={(event) => {
							let data = module;
							data.center_x = event.target.value;
							changeDataModule(hash, data);
						}}
					/>
				</li>
				<li>
					<span>y:</span>
					<input
						type="number"
						value={center_y}
						className="text-black"
						onChange={(event) => {
							let data = module;
							data.center_y = event.target.value;
							changeDataModule(hash, data);
						}}
					/>
				</li>
				<li>
					<span>radius:</span>
					<input
						type="number"
						value={radius}
						className="text-black"
						onChange={(event) => {
							let data = module;
							data.radius = event.target.value;
							changeDataModule(hash, data);
						}}
					/>
				</li>
				<li>
					<span>color:</span>
					<input
						type="color"
						value={color}
						className="text-black"
						onChange={(event) => {
							let data = module;
							data.color = event.target.value;
							changeDataModule(hash, data);
						}}
					/>
				</li>
			</ul>
		</li>
	);
}

export { CircleModule };
