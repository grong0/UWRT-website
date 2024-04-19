import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./Home";
import Catalog from "./Catalog";
import Blog from "./Blog";
import BlogPost from "./BlogPost";

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

function Routes() {
	return <RouterProvider router={router} />;
}

export default Routes;
