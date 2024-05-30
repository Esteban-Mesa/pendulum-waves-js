function draw(items, canvas = { width: 0, height: 0 }, context) {
	//#region engine
	const calculatePolar = (angle = 0, radius = 0) => {
		const toRad = -(angle * Math.PI) / 180;

		let orderly = Math.sin(toRad) * radius + canvas.width / 2;
		let abscissa = Math.cos(toRad) * radius + canvas.height / 2;

		return { x: abscissa, y: orderly };
	};

	//#region bruses
	const circleBrush = ({ center_x, center_y, radius, color }) => {
		const circle = new Path2D();
		circle.arc(center_x, center_y, radius, 0, 2 * Math.PI);
		context.fillStyle = color;
		context.fill(circle);
	};

	//#region draw functions
	const drawCricleBounce = (module) => {
		circleBrush(module);
	};

	const drawPendulumWave = (module) => {
		for (const p of module.pendulums) {
			const pos = calculatePolar(p.angle, p.radius);
			circleBrush({
				center_x: pos.x,
				center_y: pos.y,
				radius: p.size,
				color: p.color,
			});
		}
	};

	//#region Render
	items.map((item) => {
		if (item.type === "circle") {
			drawCricleBounce(item.module);
		}

		if (item.type === "circular_pendulum_wave") {
			drawPendulumWave(item.module);
		}
	});
}

function update(items) {
	items.map((item) => {
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

		if (item.type === "circular_pendulum_wave") {
			item.module.pendulums.forEach((module) => {
				if (module.angle > 360) {
					module.angle -= 360;
				}
				let velocity = (module.perimeter / 360) * item.module.speed;

				if (item.direction === "left") {
					module.angle += velocity;
				}
				if (item.direction === "right") {
					module.angle -= velocity;
				}
			});
		}
	});

	return items;
}

export { draw, update };
