import React from "react";
import { useState } from "react";

const ConcentricContext = React.createContext();

function ConcentricProvider({ children }) {
	const [nodeAnimatorList, setNodeAnimatorList] = useState([]);

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
			}}>
			{children}
		</ConcentricContext.Provider>
	);
}

export { ConcentricContext, ConcentricProvider };
