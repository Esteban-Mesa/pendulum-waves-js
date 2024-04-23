import { useContext } from "react";
import { PlusCircle } from "../assets/plus-circle";
import { ElementAnimator } from "./ElementAnimator";

import { ConcentricContext } from "../context/ConcentricContext";

function ConsoleAnimator() {
	const { nodeAnimatorList, addNodeAnim } = useContext(ConcentricContext);

	return (
		<aside className="bg-caGray-90 flex flex-col p-3 overflow-y-scroll">
			<ul className="flex flex-col flex-1">
				{nodeAnimatorList.map((node) => (
					<ElementAnimator text={node} />
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
