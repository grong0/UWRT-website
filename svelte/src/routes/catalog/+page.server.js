// import Papa from "papaparse";
import getItems from "$lib/api/items/items";

export async function load({ fetch }) {
	// const response = await fetch("/src/routes/api/items/mens_shoes.csv");
	// const responseText = response.text('utf8');
	// const data = Papa.parse(responseText);

	const data = await getItems();
	console.log(data);

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
