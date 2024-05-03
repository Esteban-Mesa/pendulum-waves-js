import React from "react";
import { useState } from "react";

const ConcentricContext = React.createContext();

function ConcentricProvider({ children }) {
	const [refehsCanvas, setRefehsCanvas] = useState(true);
	const [pauseAnimation, setPauseAnimation] = useState(true);
	const [moduleAnimationList, setModuleAnimationList] = useState([
		{
			type: "circle",
			hash: "1",
			module: {
				center_x: 10,
				center_y: 300,
				radius: 20,
				color: "#D92929",
				direction: "r",
			},
		},
		{
			type: "circle",
			hash: "2",
			module: {
				center_x: 10,
				center_y: 400,
				radius: 10,
				color: "#D92929",
				direction: "r",
			},
		},
	]);

	const addModuleAnimation = (type) => {
		if (type === "circle") {
			let circle = {
				type: "circle",
				hash: moduleAnimationList.length + Math.random(),
				module: {
					center_x: 0,
					center_y: 0,
					radius: 10,
					color: "#000000",
					direction: "r",
				},
			};

			setModuleAnimationList([...moduleAnimationList, circle]);
		}

		setRefehsCanvas(!refehsCanvas);
	};

	return (
		<ConcentricContext.Provider
			value={{
				moduleAnimationList,
				setModuleAnimationList,
				addModuleAnimation,
				pauseAnimation,
				setPauseAnimation,
				refehsCanvas,
				setRefehsCanvas,
			}}>
			{children}
		</ConcentricContext.Provider>
	);
}

export { ConcentricContext, ConcentricProvider };
