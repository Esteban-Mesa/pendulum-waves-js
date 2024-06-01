import { Trash } from "../../assets/trash";

function DeteleModuleButton({ onClick }) {
	return (
		<button
			className="bg-caGray-90 justify-self-end text-red-600 p-1 rounded-lg hover:text-red-300 hover:bg-red-950 active:text-caGray-90"
			type="button"
			onClick={onClick}>
			<Trash className="w-6 h-6" />
		</button>
	);
}

export { DeteleModuleButton };
