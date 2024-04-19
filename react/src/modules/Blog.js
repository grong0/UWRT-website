import "../styles/Blog.css";

import { Link } from "react-router-dom";

const placeholderContent =
	"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis libero maiores consequatur debitis quae possimus nobis veritatis porro sequi fuga laborum excepturi minima repudiandae laudantium iste veniam, et vel rem.";

function BlogBlock(
	title = "Lorem Ipsum",
	content = placeholderContent,
	imageURL = "https://placehold.co/150x150",
	iamgeALT = "placeholderImage"
) {
	return (
		<div class="card card-side w-full bg-base-100 shadow-xl grid grid-cols-8">
			<figure class="py-5 pl-5 col-start-1">
				<img src={{ imageURL }} alt={{ iamgeALT }} class="rounded-lg" />
			</figure>
			<div class="card-body col-start-2 col-end-8">
				<h2 class="card-title">{{ title }}</h2>
				<p>{{ content }}</p>
			</div>
			<figure class="py-5 pr-5 col-start-8">
				<Link class="btn btn-square w-full h-auto text-xl aspect-square" to="./blog_post">
					<i class="fa-solid fa-arrow-right"></i>
				</Link>
			</figure>
		</div>
	);
}

function Blog() {
	return (
		<div class="w-full p-10 gap-10">
			<div class="flex flex-col gap-10 max-w-[1200px] ml-auto mr-auto">
				<h1 class="text-5xl font-bold mb-5 text-center">Blog</h1>
				<input type="text" placeholder="Search" class="input w-full" />
				{/* Map here */}
				<BlogBlock></BlogBlock>
			</div>
		</div>
	);
}

export default Blog;
