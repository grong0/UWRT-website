<script>
	import { onMount } from "svelte";
	import SvelteMarkdown from "svelte-markdown";

	export let data;

	$: source = "";

	onMount(() => {
		fetch(`/src/routes/api/blogposts/${data.markdownName}`)
			.then((response) => response.text())
			.then((responseText) => {
				source = responseText;
			});
	});
</script>

<div class="w-full min-h-screen flex justify-center py-20 mt-16">
	<article class="prose lg:prose-xl dark:prose-invert prose-img:rounded-xl prose-img:w-full">
		<SvelteMarkdown {source} />
	</article>
</div>
