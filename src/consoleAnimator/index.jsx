import { useContext } from "react";
import { PlusCircle } from "../assets/plus-circle";
import { CircleModule } from "./CircleModule";
import { CircularPendulumWaveModule } from "./CircularPendulumWaveModule";
import { ConcentricContext } from "../context/ConcentricContext";

function ConsoleAnimator() {
	const {
		moduleAnimationList,
		setModuleAnimationList,
		addModuleAnimation,
		refehsCanvas,
		setRefehsCanvas,
	} = useContext(ConcentricContext);

	const changeDataModule = (hash, values) => {
		setModuleAnimationList(
			moduleAnimationList.map((item) => {
				if (item.hash === hash) {
					item.module = values;
				}
				return item;
			})
		);

		setRefehsCanvas(!refehsCanvas);
	};

	return (
		<aside className="bg-caGray-90 flex flex-col p-3 overflow-y-scroll">
			<ul className="flex flex-col flex-1">
				{moduleAnimationList.map((data) => {
					if (data.type === "circle") {
						return (
							<CircleModule
								key={data.hash}
								module={data.module}
								changeDataModule={changeDataModule}
							/>
						);
					}

					if (data.type === "circular_pendulum_wave") {
						return (
							<CircularPendulumWaveModule
								key={data.hash}
								module={data.module}
								changeDataModule={changeDataModule}
							/>
						);
					}
				})}
			</ul>
			<button
				type="button"
				className="m-3 self-center"
				onClick={() => {
					addModuleAnimation("circle");
				}}>
				<PlusCircle className="text-caAccent h-10 w-10" />
			</button>
		</aside>
	);
}

export { ConsoleAnimator };
