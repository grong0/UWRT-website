import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart, faGamepad, faMoon, faSun } from "@fortawesome/free-solid-svg-icons";

function Navbar() {
	return (
		<div className="navbar bg-base-100 absolute top-0">
			<div className="flex-1">
				<Link className="btn btn-ghost text-xl" to="/">
					E-Store
				</Link>
				<Link className="btn btn-ghost text-l" to="/catalog">
					Catalog
				</Link>
				<Link className="btn btn-ghost text-l" to="/blog">
					Blog
				</Link>
			</div>
			<div className="flex-none">
				<label className="text-xl swap swap-rotate btn btn-square btn-ghost">
					<input type="checkbox" className="theme-controller" value="light" />
					<FontAwesomeIcon icon={faSun} className="swap-on fill-current" />
					<FontAwesomeIcon icon={faMoon} className="swap-off fill-current" />
				</label>
				<button className="btn btn-square btn-ghost text-xl">
					<FontAwesomeIcon icon={faShoppingCart} />
				</button>
			</div>
		</div>
	);
}

export default Navbar;
