<script setup>
import { ref } from "vue";
import BlogBlock from "../components/BlogBlock.vue";

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

function filterBlogs(blogs, query) {
	return blogs.filter(
		(blog) =>
			blog.title.toLowerCase().search(query.toLowerCase()) != -1 ||
			blog.description.toLowerCase().search(query.toLowerCase()) != -1
	);
}

let query = ref("");
</script>

<template>
	<div class="w-full p-10 gap-10 mt-16 min-h-screen">
		<div class="flex flex-col gap-10 max-w-[800px] ml-auto mr-auto">
			<h1 class="text-5xl font-bold mb-5 text-center">Blog</h1>
			<input type="text" placeholder="Search" class="input w-full" v-model="query" />
			<BlogBlock
				v-for="(blog, index) in filterBlogs(blogs, query)"
				v-bind:key="index"
				:title="blog['title']"
				:description="blog['description']"
				:sourcePath="blog['sourcePath']"
			/>
		</div>
	</div>
</template>
