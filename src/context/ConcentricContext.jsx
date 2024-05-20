import React from "react";
import { useState } from "react";
import { defaultAnimationModules } from "../utils/defaultAnimationModules";

const ConcentricContext = React.createContext();

function ConcentricProvider({ children }) {
	const [refehsCanvas, setRefehsCanvas] = useState(true);
	const [pauseAnimation, setPauseAnimation] = useState(true);
	const [moduleAnimationList, setModuleAnimationList] = useState([]);

	const addModuleAnimation = (type) => {
		let newModuleAnimation;

		if (type === "circle") {
			const hash = moduleAnimationList.length + Math.random();
			const module = defaultAnimationModules.bounceCircle(hash);
			newModuleAnimation = module;
		}

		if (type === "circular_pendulum_wave") {
			const hash = moduleAnimationList.length + Math.random();
			const module = defaultAnimationModules.circularPendulumWaveModule(hash);
			newModuleAnimation = module;
		}

		setModuleAnimationList([...moduleAnimationList, newModuleAnimation]);

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
