import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart, faMoon, faSun } from "@fortawesome/free-solid-svg-icons";

import "@fortawesome/fontawesome-svg-core/styles.css";

function Navbar() {
	return (
		<div className="navbar bg-base-100 absolute top-0">
			<div className="flex-1">
				<Link className="btn btn-ghost text-xl" href="/">
					E-Store
				</Link>
				<Link className="btn btn-ghost text-l" href="/catalog">
					Catalog
				</Link>
				<Link className="btn btn-ghost text-l" href="/blog">
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
