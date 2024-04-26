import { useState, useContext } from "react";
import { ConcentricContext } from "../context/ConcentricContext";

function ElementAnimator({ text }) {
	const { nodeAnimatorList, setNodeAnimatorList } =
		useContext(ConcentricContext);

	const [height, setHeight] = useState(0);
	const [color, setColor] = useState("black");

	return (
		<li className="bg-caGray-60 text-caGray-10 mb-2 p-2">
			<h3 className="mb-4">{text}</h3>
			<form
				action=""
				onChange={() => {
					// setNodeAnimatorList([...nodeAnimatorList, height, color]);
					setNodeAnimatorList([height, color]);
				}}>
				<ul>
					<li>
						<label>altura</label>
						<input
							type="number"
							name="height"
							onChange={(event) => setHeight(event.target.value)}
						/>
					</li>
					<li>
						<label>color</label>
						<input
							type="color"
							name="color"
							onChange={(event) => setColor(event.target.value)}
						/>
					</li>
				</ul>
			</form>
		</li>
	);
}

export { ElementAnimator };
