function draw(items, canvas = { width: 0, height: 0 }, context) {
	const ctx = context;
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
		ctx.fillStyle = color;
		ctx.fill(circle);
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

	items.map((item) => {
		circleBrush(item);
	});
}

function update(items) {
	items.map((item) => {
		item.center_x += 1;
	});
}

export { draw, update };
