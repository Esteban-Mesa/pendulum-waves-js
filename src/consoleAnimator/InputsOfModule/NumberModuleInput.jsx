function NumberModuleInput({
	name,
	enableZero = true,
	valueToShow,
	valueToChange,
}) {
	return (
		<li className=" gap-2">
			<span className="text-blue-500">{name}</span>
			<input
				className="text-black w-full"
				type="number"
				value={valueToShow}
				min={enableZero ? 0 : 1}
				onChange={(event) => {
					let val = event.target.value;
					val = parseInt(val);
					valueToChange(val);
				}}
				onClick={(event) => event.target.select()}
			/>
		</li>
	);
}

export { NumberModuleInput };
