import React, { useState } from "react";
import { Play } from "../assets/play.jsx";
import { Pause } from "../assets/pause.jsx";

function PlayBar() {
	const [onPlay, setOnPlay] = useState(false);

	const switchPlay = () => {
		if (onPlay) {
			return <Pause className="text-black h-6" />;
		} else {
			return <Play className="text-black h-6" />;
		}
	};

	return (
		<div className="flex items-center justify-between h-6 w-[300px] mt-5">
			{switchPlay()}
			<div className="flex items-center">
				<div className="bg-black h-1 w-[100px]"></div> X1
			</div>
			<div> Full</div>
		</div>
	);
	// TODO: add sppedBar and fullScreen
}

export default PlayBar;
