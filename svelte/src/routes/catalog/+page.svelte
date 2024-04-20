<script>
	import CatalogItem from "./catalogItem.svelte";

	export let data;

	$: items = [];
	$: query = "";
	$: tag = "all";
	$: sort = "none";

	function sortItems() {
		return data.post.items
			.filter((item) => item.name.inlcudes(query))
			.filter((item) => item.tags.contains(tag))
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
</script>

<div class="flex flex-col w-full min-h-screen p-10 mt-16">
	<div class="flex flex-row w-full gap-10">
		<h1 class="text-5xl font-bold mb-10">Catalog</h1>
		<div class="flex flex-row gap-2">
			<input
				type="text"
				placeholder="Search"
				class="input input-bordered w-full"
				on:input={(e) => {
					query = e.target.value;
					items = sortItems();
				}}
			/>
			<select
				class="select select-bordered w-full max-w-xs"
				on:input={(e) => {
					tag = e.target.value;
					items = sortItems();
				}}
			>
				<option selected value="all">All</option>
				{#each data.post.tags as tag}
					<option value={tag}>{tag}</option>
				{/each}
			</select>
			<select
				class="select select-bordered w-full max-w-xs"
				on:input={(e) => {
					sort = e.target.value;
					items = sortItems();
				}}
			>
				<option selected value="none">None</option>
				<option value="htl">High to Low</option>
				<option value="lth">Low to High</option>
			</select>
		</div>
	</div>
	{#each items as item}
		<CatalogItem name={item.name} price={item.price} tags={item.tags} imageULR={item.imageURL} />
	{/each}
</div>
