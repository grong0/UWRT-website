export function load({ fetch, params }) {
	// const response = await fetch(`/src/routes/api/blogposts/${params.markdownName}`);
	// const responseText = response.text();
	// console.log(responseText);
	// return {
	// 	markdownText: responseText
	// };
	// fetch(`/src/routes/api/blogposts/${params.markdownName}`)
	// 	.then((response) => response.text())
	// 	.then((responseText) => {
	// 		return {
	// 			markdownText: responseText
	// 		};
	// 	});
    return params;
}
