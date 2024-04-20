import Papa from "papaparse";

async function getData() {
	const response = await fetch("./data/mens_shoes.csv");
	const responseText = response.text();
	const data = Papa.parse(responseText);
	return data.data;
}

async function getMarkdown(name) {
	const response = await fetch(`./data/${name}`);
	return response.text();
}
