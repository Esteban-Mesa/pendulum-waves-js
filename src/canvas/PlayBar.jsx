import React, { useState, useContext } from "react";
import { Play } from "../assets/play.jsx";
import { Pause } from "../assets/pause.jsx";
import { ConcentricContext } from "../context/ConcentricContext";
function PlayBar() {
	const { pauseAnimation, setPauseAnimation } = useContext(ConcentricContext);

	const switchPlay = () => {
		if (pauseAnimation) {
			return <Pause className="text-black h-6" />;
		} else {
			return <Play className="text-black h-6" />;
		}
	};

	return (
		<div className="flex items-center justify-between h-6 w-[300px] mt-5">
			<button
				type="button"
				onClick={() => {
					if (pauseAnimation) {
						setPauseAnimation(false);
					} else {
						setPauseAnimation(true);
					}
				}}>
				{switchPlay()}
			</button>
			<div className="flex items-center">
				<div className="bg-black h-1 w-[100px]"></div> X1
			</div>
			<div> Full</div>
		</div>
	);
	// TODO: add sppedBar and fullScreen
}

export { PlayBar };
