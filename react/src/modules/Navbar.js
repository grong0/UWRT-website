import "../styles/Navbar.css";

import { Link } from "react-router-dom";

function Navbar() {
	return (
		<div class="navbar bg-base-100 absolute">
			<div class="flex-1">
				<Link class="btn btn-ghost text-xl" to="./">
					E-Store
				</Link>
				<Link class="btn btn-ghost text-l" to="./catalog">
					Catalog
				</Link>
				<Link class="btn btn-ghost text-l" to="./blog">
					Blog
				</Link>
			</div>
			<div class="flex-none">
				<label class="text-xl swap swap-rotate btn btn-square btn-ghost">
					<input type="checkbox" class="theme-controller" value="retro" />
					<i class="fa-solid fa-gamepad swap-on fill-current"></i>
					<i class="far fa-moon swap-off fill-current"></i>
				</label>
				<button class="btn btn-square btn-ghost text-xl">
					<i class="fas fa-shopping-cart"></i>
				</button>
			</div>
		</div>
	);
}

export default Navbar;
