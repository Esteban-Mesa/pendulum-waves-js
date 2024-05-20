const defaultAnimationModules = {
	bounceCircle: (newHash = 0) => ({
		type: "circle",
		hash: newHash,
		module: {
			center_x: 0,
			center_y: 0,
			radius: 10,
			color: "#000000",
			direction: "r",
		},
	}),
	circularPendulumWaveModule: (newHash = 0) => ({
		type: "circular_pendulum_wave",
		hash: newHash,
		module: {
			speed: 1,
			pendulums: [
				{
					angle: 0,
					radius: 20,
					color: "#000000",
					size: 5,
					perimeter: 125.66370614359172,
				},
				{
					angle: 0,
					radius: 30,
					color: "#000000",
					size: 5,
					perimeter: 188.49555921538757,
				},
				{
					angle: 0,
					radius: 40,
					color: "#000000",
					size: 5,
					perimeter: 251.32741228718345,
				},
				{
					angle: 0,
					radius: 50,
					color: "#000000",
					size: 5,
					perimeter: 314.1592653589793,
				},
				{
					angle: 0,
					radius: 60,
					color: "#000000",
					size: 5,
					perimeter: 376.99111843077515,
				},
				{
					angle: 0,
					radius: 70,
					color: "#000000",
					size: 5,
					perimeter: 439.822971502571,
				},
				{
					angle: 0,
					radius: 80,
					color: "#000000",
					size: 5,
					perimeter: 502.6548245743669,
				},
				{
					angle: 0,
					radius: 90,
					color: "#000000",
					size: 5,
					perimeter: 565.4866776461628,
				},
				{
					angle: 0,
					radius: 100,
					color: "#000000",
					size: 5,
					perimeter: 628.3185307179587,
				},
				{
					angle: 0,
					radius: 110,
					color: "#000000",
					size: 5,
					perimeter: 691.1503837897545,
				},
				{
					angle: 0,
					radius: 120,
					color: "#000000",
					size: 5,
					perimeter: 753.9822368615503,
				},
				{
					angle: 0,
					radius: 130,
					color: "#000000",
					size: 5,
					perimeter: 816.8140899333462,
				},
			],
		},
	}),
};

export { defaultAnimationModules };
