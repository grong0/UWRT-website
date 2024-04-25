import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import CatalogView from "@/views/CatalogView.vue";
import BlogView from "@/views/BlogView.vue";
import BlogPostView from "@/views/BlogPostView.vue";

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: "/",
			name: "home",
			component: HomeView
		},
		{
			path: "/catalog",
			name: "catalog",
			// route level code-splitting
			// this generates a separate chunk (About.[hash].js) for this route
			// which is lazy-loaded when the route is visited.
			component: CatalogView
		},
		{
			path: "/blog",
			name: "blog",
			component: BlogView
		},
		{
			path: "/blog/:sourcePath",
			name: "blogpost",
			props: true,
			component: BlogPostView
		}
	]
});

export default router;
