import { useContext } from "react";
import { PlusCircle } from "../assets/plus-circle";
import { CircleModule } from "./CircleModule";
import { ConcentricContext } from "../context/ConcentricContext";

function ConsoleAnimator() {
	const { moduleAnimationList, setModuleAnimationList } =
		useContext(ConcentricContext);

	const changeDataModule = (hash, values) => {
		setModuleAnimationList(
			moduleAnimationList.map((item) => {
				if (item.hash === hash) {
					item.module = values;
				}
				return item;
			})
		);
	};

	return (
		<aside className="bg-caGray-90 flex flex-col p-3 overflow-y-scroll">
			<ul className="flex flex-col flex-1">
				{moduleAnimationList.map((data) => (
					<CircleModule
						key={data.hash}
						type={data.type}
						hash={data.hash}
						module={data.module}
						changeDataModule={changeDataModule}
					/>
				))}
			</ul>
			<button
				type="button"
				className="m-3 self-center"
				onClick={() => {
					addNodeAnim();
				}}>
				<PlusCircle className="text-caAccent h-10 w-10" />
			</button>
		</aside>
	);
}

export { ConsoleAnimator };
