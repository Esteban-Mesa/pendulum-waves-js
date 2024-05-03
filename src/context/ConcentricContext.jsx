import React from "react";
import { useState } from "react";

const ConcentricContext = React.createContext();

function ConcentricProvider({ children }) {
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

	return (
		<ConcentricContext.Provider
			value={{
				moduleAnimationList,
				setModuleAnimationList,
				pauseAnimation,
				setPauseAnimation,
			}}>
			{children}
		</ConcentricContext.Provider>
	);
}

export { ConcentricContext, ConcentricProvider };
