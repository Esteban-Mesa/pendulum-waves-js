const canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
canvas.height = 500;
canvas.width = 500;

//#region bruses
const circleBrush = (center_x, center_y, radius, color) => {
	const circle = new Path2D();
	circle.arc(center_x, center_y, radius, 0, 2 * Math.PI);
	ctx.fillStyle = color;
	ctx.fill(circle);
};
//#endregion
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

const calculatePolar = (angle = 0, distance = 0) => {
	const toRad = (angle * Math.PI) / 180;

	let orderly = Math.sin(toRad) * distance + canvas.width / 2;
	let abscissa = Math.cos(toRad) * distance + canvas.height / 2;

	return { x: orderly, y: abscissa };
};

const pendulumGroup = (
	amount = 0,
	initialGap = 0,
	gap = 0,
	size = 0,
	color = "black"
) => {
	let group = [];

	for (let i = 0; i < amount; i++) {
		const p = pendulum({
			angle: 0,
			radius: initialGap + gap * i,
			size: size,
			color: color,
		});
		group.push(p);
	}

	return {
		group,
		render(v) {
			this.group.forEach((element) => {
				element.draw(v);
			});
		},
	};
};
//#endregion
//#region to-draw
const group = pendulumGroup(32, 20, 3, 3, "red");
const graveGroup = pendulumGroup(32, 20, 3, 3, "red");
const orbitGroup = pendulumGroup(64, 120, 2, 2, "blue");
const orbitGroup2 = pendulumGroup(64, 120, 2, 2, "blue");

function update() {
	ctx.clearRect(0, 0, canvas.width, canvas.height);

	group.render(800);
	graveGroup.render(-800);
	orbitGroup.render(300);
	orbitGroup2.render(600);

	requestAnimationFrame(update);
}
//#endregion

requestAnimationFrame(update);
