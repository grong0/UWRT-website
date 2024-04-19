"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";

function BlogPost() {
	const params = useParams();
	const [markdown, setMarkdown] = useState("");
	function updateMarkdown(newMarkdown) {
		setMarkdown(newMarkdown);
	}

	useEffect(() => {
		console.log(`about to fetch ./data/${params.markdownName}`);
		fetch(`/data/${params.markdownName}`)
			.then((response) => response.text())
			.then((responseText) => {
				updateMarkdown(responseText);
				console.log(responseText);
				console.log(markdown);
			});
	}, []);

	return (
		<div className="w-full min-h-screen flex justify-center py-20 mt-16">
			<article className="prose lg:prose-xl dark:prose-invert prose-img:rounded-xl prose-img:w-full">
				<Markdown remarkPlugins={remarkGfm}>{markdown}</Markdown>
			</article>
		</div>
	);
}

export default BlogPost;
