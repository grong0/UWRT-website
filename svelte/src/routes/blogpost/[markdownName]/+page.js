export async function load({ fetch, params }) {
	const response = fetch(`/api/blogposts/${params.markdownName}`);
	return {
		post: {}
	};
}
