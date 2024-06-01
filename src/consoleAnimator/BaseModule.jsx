function BaseModule({ nameModule, children }) {
	return (
		<li className="bg-caGray-60 text-caGray-10 rounded-lg mb-2 p-2">
			<h3>{nameModule}</h3>
			<ul className="grid grid-flow-row grid-cols-3 gap-3 ">{children}</ul>
		</li>
	);
}

export { BaseModule };
