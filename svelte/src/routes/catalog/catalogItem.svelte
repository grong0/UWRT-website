<script>
	export let name = "Lorem Ipsum";
	export let price = 12.99;
	export let tags = ["Tag", "Tag"];
	export let imageULR = "https://placehold.co/500x500";
</script>

<div class="w-full min-h-screen">
	<div class="grid grid-cols-5 gap-10">
		<div class="card w-full bg-base-100 shadow-xl">
			<figure class="w-full aspect-square relative">
				<img src={imageULR} alt={name} class="w-full h-full" />
				<div class="w-min h-min absolute right-2 bottom-2 rounded-xl bg-base-200 p-4 shadow-xl">
					<h2 class="font-bold text-primary text-xl">${parseFloat(price).toFixed(2)}</h2>
				</div>
			</figure>
			<div class="card-body">
				<h2 class="card-title">{name}</h2>
				<div class="w-full flex flex-row gap-2 mb-5 flex-wrap h-auto">
					{#each tags as tag}
						<div class="badge badge-accent select-none font-bold">{tag}</div>
					{/each}
				</div>
				<div class="card-actions justify-end mt-auto">
					<button class="btn mr-auto">Add to Cart</button>
					<button class="btn btn-primary">Buy Now</button>
				</div>
			</div>
		</div>
	</div>
</div>
