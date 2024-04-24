<script>
	import { onMount } from "svelte";
	import Papa from "papaparse";
	import CatalogItem from "./catalogItem.svelte";

	const BreakException = Error();

	// export let data;

	$: items = [];
	$: tags = [];
	$: shownItems = [];
	$: query = "";
	$: tag = "all";
	$: sort = "none";
	$: mounted = false;

	function sortItems() {
		shownItems = items
			.filter((item) => item.name.toLowerCase().includes(query.toLowerCase()))
			.filter((item) => item.tags.includes(tag) || tag == "all")
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

	onMount(() => {
		fetch("/src/routes/api/items/mens_shoes.csv")
			.then((response) => response.text())
			.then((responseText) => {
				const data = Papa.parse(responseText);

				var count = 0;
				try {
					data.data.forEach((item) => {
						if (count > 100) {
							throw BreakException;
						}
						if (count <= 500 && item.at(19) != "name") {
							items.push({
								name: item.at(19),
								price: item.at(20),
								tags: item.at(3).split(","),
								imageURL: item.at(13)
							});
							tags.push(...items.at(items.length - 1).tags.filter((tag) => !tags.includes(tag)));
						}
						count += 1;
					});
				} catch (error) {}
				items = items;
				tags = tags;
				sortItems();
				mounted = true;
			});
	});
</script>

<div class="flex flex-col w-full min-h-screen p-10 mt-16">
	<div class="flex flex-row w-full gap-10">
		<h1 class="text-5xl font-bold mb-10">Catalog</h1>
		<div class="flex flex-row gap-2">
			<input
				type="text"
				placeholder="Search"
				class="input input-bordered w-full"
				on:load={(e) => {
					query = e.target.value;
				}}
				on:input={(e) => {
					console.log(query);
					query = e.target.value;
					sortItems();
				}}
			/>
			<select
				class="select select-bordered w-full max-w-xs"
				on:load={(e) => {
					tag = e.target.value;
				}}
				on:input={(e) => {
					tag = e.target.value;
					sortItems();
				}}
			>
				<option selected value="all">All</option>
				{#key tags}
					{#each tags as tagObject}
						<option value={tagObject}>{tagObject}</option>
					{/each}
				{/key}
				<option value="eot">end of tags</option>
			</select>
			<select
				class="select select-bordered w-full max-w-xs"
				on:load={(e) => {
					sort = e.target.value;
				}}
				on:input={(e) => {
					sort = e.target.value;
					sortItems();
				}}
			>
				<option selected value="none">None</option>
				<option value="htl">High to Low</option>
				<option value="lth">Low to High</option>
			</select>
		</div>
	</div>

	<div class="w-full min-h-screen">
		{#if !mounted}
			<div class="w-full min-h-screen flex justify-center content-center">
				<div><span class="loading loading-spinner loading-lg"></span></div>
			</div>
		{:else}
			<div class="grid grid-cols-5 gap-10">
				{#each shownItems as item}
					<CatalogItem
						name={item.name}
						price={item.price}
						tags={item.tags}
						imageULR={item.imageURL}
					/>
				{/each}
			</div>
		{/if}
	</div>
</div>
