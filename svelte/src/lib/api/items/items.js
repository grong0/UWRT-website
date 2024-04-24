import Papa from "papaparse";
import fs from "fs";

export default async function getItems() {
	// fetch("./mens_shoes.csv")
	// 	.then((response) => response.text())
	// 	.then((responseText) => {
	// 		return Papa.parse(responseText);
	// 	});
	const response = await fs("./mens_shoes.csv");
	const responseText = response.text();
	return Papa.parse(responseText);
}
