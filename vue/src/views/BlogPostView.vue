<script setup>
import { ref, onMounted } from "vue";
import VueMarkdown from "vue-markdown-render";

const props = defineProps(["sourcePath"]);

var content = ref("");
onMounted(() => {
	fetch(`/blogs/${props.sourcePath}`)
		.then((response) => response.text())
		.then((resposneText) => {
			content.value = resposneText;
		});
});
</script>

<template>
	<div class="w-full min-h-screen flex justify-center py-20 mt-16">
		<article class="prose lg:prose-xl dark:prose-invert prose-img:rounded-xl prose-img:w-full">
			<VueMarkdown :source="content" />
		</article>
	</div>
</template>
