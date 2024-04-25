<script setup>
import { ref, onMounted } from "vue";
import Papa from "papaparse";

import CatalogItem from "../components/CatalogItem.vue";

const BreakException = Error();

const items = ref([]);
const tags = ref(new Set());

onMounted(() => {
	fetch("/items/mens_shoes.csv")
		.then((response) => response.text())
		.then((responseText) => {
			const data = Papa.parse(responseText);
			var count = 0;
			try {
				data.data.forEach((item) => {
					if (count > 100) {
						throw BreakException;
					}
					if (item.at(19) != "name") {
						items.value.push({
							name: item.at(19),
							price: item.at(20),
							tags: item.at(3).split(","),
							imageURL: item.at(13)
						});
						items.value.at(items.value.length - 1).tags.forEach((tag) => {
							tags.value.add(tag);
						});
					}
					count += 1;
				});
			} catch (error) {
				console.log("broke");
			}
		});
});

function filterItems(items, query, tag, sort) {
	return items
		.filter((item) => {
			if (item.name && item.tags) {
                console.log(tag)
				return (
					item.name.toLowerCase().includes(query.toLowerCase()) &&
					(item.tags.includes(tag) || tag == "all")
				);
			}
			return false;
		})
		.sort((a, b) => {
			switch (sort) {
				case "htl":
					return b.price - a.price;
				case "lth":
					return a.price - b.price;
				default:
					return 0;
			}
		});
}

let query = ref("");
let tag = ref("all");
let sort = ref("none");
</script>

<template>
	<div class="flex flex-col w-full p-10 mt-16">
		<div class="flex flex-row w-full gap-10">
			<h1 class="text-5xl font-bold mb-10">Catalog</h1>
			<div class="flex flex-row gap-2">
				<input
					type="text"
					placeholder="Search"
					class="input input-bordered w-full"
					v-model="query"
				/>
				<select class="select select-bordered w-full max-w-xs" v-model="tag">
					<option selected value="all">All</option>
					<option v-for="(tag, index) in tags" v-bind:key="index" :value="tag">
						{{ tag }}
					</option>
				</select>
				<select class="select select-bordered w-full max-w-xs" v-model="sort">
					<option selected value="none">None</option>
					<option value="htl">High to Low</option>
					<option value="lth">Low to High</option>
				</select>
			</div>
		</div>

		<div class="w-full min-h-screen">
			<div class="grid grid-cols-5 gap-10">
				<CatalogItem
					v-for="(item, index) in filterItems(items, query, tag, sort)"
					v-bind:key="index"
					:name="item.name"
					:tags="item.tags"
					:price="item.price"
					:imageurl="item.imageURL"
				/>
			</div>
		</div>
	</div>
</template>
