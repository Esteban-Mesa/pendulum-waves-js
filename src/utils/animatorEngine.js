function draw(items, canvas = { width: 0, height: 0 }, context) {
	//#region engine
	const calculatePolar = (angle = 0, distance = 0) => {
		const toRad = (angle * Math.PI) / 180;

		let orderly = Math.sin(toRad) * distance + canvas.width / 2;
		let abscissa = Math.cos(toRad) * distance + canvas.height / 2;

		return { x: orderly, y: abscissa };
	};

	//#region bruses
	const circleBrush = ({ center_x, center_y, radius, color }) => {
		const circle = new Path2D();
		circle.arc(center_x, center_y, radius, 0, 2 * Math.PI);
		context.fillStyle = color;
		context.fill(circle);
	};

	//#region entitise
	const pendulum = ({ angle = 0, radius = 0, size = 0, color = "black" }) => ({
		angle,
		radius,
		color,
		size,
		perimeter: 2 * Math.PI * radius,
		draw(time = 0) {
			this.angle += this.perimeter / time;
			const direction = calculatePolar(this.angle, this.radius);
			circleBrush(direction.x, direction.y, this.size, this.color);
		},
	});

	const pendulumWave = ({
		amount = 0,
		centerGap = 0,
		gap = 0,
		angle = 0,
		size = 0,
		color = "black",
	}) => {
		let group = [];

		for (let i = 0; i < amount; i++) {
			const p = pendulum({
				angle: angle,
				radius: centerGap + gap * i,
				size: size,
				color: color,
			});
			group.push(p);
		}

		return group;
	};

	items.map((item) => {
		if (item.type === "circle") {
			circleBrush(item.module);
		} else {
			circleBrush(item);
		}
	});
}

function update(items) {
	items.map((item) => {
		if (item.type === "circle") {
			item.module.center_x += 1;
		}
	});
}

export { draw, update };
