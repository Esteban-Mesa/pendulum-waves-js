import BurgerMenu from "../assets/burgerMenu";

function TopBar() {
	return (
		<header className="col-span-full bg-caGray-60 flex items-center">
			<BurgerMenu className="text-caAccent w-8 h-8 ml-3" />
			<h1 className="font-sans font-bold text-xl text-caAccent ml-5">
				Concentric animator
			</h1>
		</header>
	);
}

export { TopBar };
