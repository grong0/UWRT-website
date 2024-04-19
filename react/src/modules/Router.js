import {
	createBrowserRouter,
	BrowserRouter,
	Routes as ReactRoutes,
	Route,
	Switch,
} from "react-router-dom";

import Home from "./Home";
import Catalog from "./Catalog";
import Blog from "./Blog";
import BlogPost from "./BlogPost";
import Layout from "./Layout";

const router = createBrowserRouter([
	{
		path: "/",
		element: Home,
	},
	{
		path: "/catalog",
		element: Catalog,
	},
	{
		path: "/blog",
		element: Blog,
	},
	{
		path: "blogpost",
		element: BlogPost,
	},
]);

// function Routes() {
// 	return <RouterProvider router={router} />;
// }

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
