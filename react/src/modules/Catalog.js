import { useEffect, useRef, useState } from "react";
import Papa from "papaparse";
import CatalogItem from "./CatalogItem";

const BreakException = {};

function Catalog() {
	const [totalItems, setTotalItems] = useState([]);
	function updateTotalItems(newTotalItems) {
		setTotalItems(newTotalItems);
	}
	const [items, setItems] = useState([]);
	function updateItems(newItems) {
		setItems(newItems);
	}
	const [tags, setTags] = useState([""]);
	function updateTags(newTags) {
		setTags(newTags);
	}
	const [query, setQuery] = useState("");
	function updateQuery(newQuery) {
		setQuery(newQuery);
	}
	const [selectedTag, setSelectedTag] = useState("all");
	function updateSelectedTag(newSelectedTag) {
		setSelectedTag(newSelectedTag);
	}
	const [sort, setSort] = useState("none");
	function updateSort(newSort) {
		setSort(newSort);
	}

	useEffect(() => {
		fetch("./data/mens_shoes.csv")
			.then((response) => response.text())
			.then((responseText) => {
				const data = Papa.parse(responseText);
				var newItems = [];
				var tags = [];
				var count = 0;
				try {
					data.data.forEach((item) => {
						if (count > 100) {
							throw BreakException;
						}
						if (count <= 500 && item.at(19) != "name") {
							newItems.push({
								name: item.at(19),
								price: item.at(20),
								tags: item.at(3).split(","),
								imageURL: item.at(13),
							});
							tags.push(
								...newItems
									.at(newItems.length - 1)
									.tags.filter((tag) => !tags.includes(tag))
							);
						}
						count += 1;
					});
				} catch (error) {}

				updateTotalItems(newItems);
				updateItems(newItems);
				updateTags(tags);
				console.log("done");
			});
	}, []);

	useEffect(() => {
		updateItems(
			totalItems
				.filter((item) => {
					if (item.name && item.tags) {
						return (
							item.name.toLowerCase().includes(query.toLowerCase()) &&
							(item.tags.includes(selectedTag) || selectedTag == "all")
						);
					}
					return false;
				})
				.sort((a, b) => {
					console.log(sort);
					switch (sort) {
						case "htl":
							return b.price - a.price;
						case "lth":
							return a.price - b.price;
						default:
							return 0;
					}
				})
		);
	}, [query, selectedTag, sort]);

	return (
		<div className="flex flex-col w-full p-10 mt-16">
			<div className="flex flex-row w-full gap-10">
				<h1 className="text-5xl font-bold mb-10">Catalog</h1>
				<div className="flex flex-row gap-2">
					<input
						type="text"
						placeholder="Search"
						className="input input-bordered w-full"
						onChange={(e) => updateQuery(e.target.value)}
					/>
					<select
						className="select select-bordered w-full max-w-xs"
						onChange={(e) => updateSelectedTag(e.target.value)}
						defaultValue={"all"}
					>
						<option selected>All</option>
						{tags.map((tag, index) => (
							<option value={tag} key={index}>
								{tag}
							</option>
						))}
					</select>
					<select
						className="select select-bordered w-full max-w-xs"
						onChange={(e) => updateSort(e.target.value)}
						defaultValue={"none"}
					>
						<option selected>None</option>
						<option value={"htl"}>High to Low</option>
						<option value={"lth"}>Low to High</option>
					</select>
				</div>
			</div>

			<div className="w-full min-h-screen">
				<div className="grid grid-cols-5 gap-10 min-h">
					{items.map((item, index) => (
						<CatalogItem
							name={item.name ? item.name : "Not Found"}
							key={index}
							price={item.price ? item.price : 0.0}
							tags={item.tags ? item.tags : []}
							imageURL={item.imageURL ? item.imageURL : ""}
							imageALT={item.name ? item.name : "Not Found"}
						/>
					))}
				</div>
			</div>
		</div>
	);
}

export default Catalog;
