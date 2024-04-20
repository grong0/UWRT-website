<script>
	import "@fortawesome/fontawesome-free/css/all.min.css";

	const blogs = [
		{
			title: "Blog Template 1",
			description: "Testing Images and Quotes",
			sourcePath: "/templateBlog1.md"
		},
		{
			title: "Blog Template 2",
			description: "Testing Lists",
			sourcePath: "/templateBlog2.md"
		},
		{
			title: "Blog Template 3",
			description: "Testing Tables and Code Blocks",
			sourcePath: "/templateBlog3.md"
		}
	];

	$: query = "";

	$: queriedBlogs = blogs.filter(
		(item) =>
			item.title.toLowerCase().includes(query.toLowerCase()) ||
			item.description.toLowerCase().includes(query.toLowerCase())
	);
</script>

<div class="w-full p-10 gap-10 mt-16 min-h-screen">
	<div class="flex flex-col gap-10 max-w-[800px] mx-auto">
		<h1 class="text-5xl font-bold mb-5 text-center">Blog</h1>
		<input
			type="text"
			placeholder="Search"
			class="input w-full"
			on:input={(e) => {
				query = e.target.value;
			}}
		/>
		{#each queriedBlogs as blog}
			<div class="card card-side w-full bg-base-100 shadow-xl grid grid-cols-8">
				<div class="card-body col-start-1 col-end-8">
					<h2 class="card-title">{blog.title}</h2>
					<h3 class="text-l">{blog.description}</h3>
				</div>
				<figure class="py-5 pr-5 col-start-8">
					<a
						class="btn btn-square w-full h-auto text-xl aspect-square"
						href="./blogpost{blog.sourcePath}"
					>
						<i class="fa-solid fa-arrow-right"></i>
					</a>
				</figure>
			</div>
		{/each}
	</div>
</div>
