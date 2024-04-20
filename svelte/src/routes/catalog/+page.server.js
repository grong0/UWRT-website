import {getData} from "$lib/dataFunctions.js";

export async function load({ params }) {
	const data = getData();
	// const response = await fetch("$lib/data/mens_shoes.csv");
	// const responseText = response.text();
	// const data = Papa.parse(responseText);

	var items = [];
	var tags = [];
	// var count = 0;
	// try {
	// 	data.data.forEach((item) => {
	// 		if (count > 100) {
	// 			throw BreakException;
	// 		}
	// 		if (count <= 500 && item.at(19) != "name") {
	// 			items.push({
	// 				name: item.at(19),
	// 				price: item.at(20),
	// 				tags: item.at(3).split(","),
	// 				imageURL: item.at(13)
	// 			});
	// 			tags.push(...items.at(items.length - 1).tags.filter((tag) => !tags.includes(tag)));
	// 		}
	// 		count += 1;
	// 	});
	// } catch (error) {}
	return {
		post: {
			items: items,
			tags: tags
		}
	};
}
