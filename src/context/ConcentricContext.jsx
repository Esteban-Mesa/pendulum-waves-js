import React from "react";
import { useState } from "react";

const ConcentricContext = React.createContext();

function ConcentricProvider({ children }) {
	const [pauseAnimation, setPauseAnimation] = useState(true);
	const [nodeAnimatorList, setNodeAnimatorList] = useState([]);
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

	const addNodeAnim = () => {
		if (nodeAnimatorList.length === 0) {
			setNodeAnimatorList([1]);
		} else {
			const count = nodeAnimatorList.length;
			setNodeAnimatorList([...nodeAnimatorList, count + 1]);
		}
		console.log(nodeAnimatorList);
	};

	return (
		<ConcentricContext.Provider
			value={{
				nodeAnimatorList,
				setNodeAnimatorList,
				addNodeAnim,
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
