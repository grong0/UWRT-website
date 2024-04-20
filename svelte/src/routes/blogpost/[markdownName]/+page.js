export async function load({ fetch, params }) {
	const urlParams = new URLSearchParams(window.location.search);
	console.log(urlParams);
	const response = fetch(`/lib/data/${urlParams}`);
	return {
		post: {}
	};
}
