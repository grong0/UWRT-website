import { BrowserRouter, Routes as ReactRoutes, Route } from "react-router-dom";

import Home from "./Home";
import Catalog from "./Catalog";
import Blog from "./Blog";
import BlogPost from "./BlogPost";
import Layout from "./Layout";

function Routes() {
	return (
		<BrowserRouter>
			<ReactRoutes>
				<Route path="/" element={<Layout />}>
					<Route index element={<Home />} />
					<Route path="catalog" element={<Catalog />} />
					<Route path="blog" element={<Blog />} />
					<Route path="blogpost">
						<Route path=":markdownName" element={<BlogPost />} />
					</Route>
				</Route>
			</ReactRoutes>
		</BrowserRouter>
	);
}

export default Routes;
