import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";

const blogs = [
	{
		title: "Blog Template 1",
		description: "Testing Images and Quotes",
		sourcePath: "/templateBlog1.md",
	},
	{
		title: "Blog Template 2",
		description: "Testing Lists",
		sourcePath: "/templateBlog2.md",
	},
	{
		title: "Blog Template 3",
		description: "Testing Tables and Code Blocks",
		sourcePath: "/templateBlog3.md",
	},
];

function BlogBlock(props) {
	return (
		<div className="card card-side w-full bg-base-100 shadow-xl grid grid-cols-8">
			<div className="card-body col-start-1 col-end-8">
				<h2 className="card-title text-xl">{props.title}</h2>
				<h3 className="text-l">{props.description}</h3>
			</div>
			<figure className="py-5 pr-5 col-start-8">
				<Link
					className="btn btn-square w-full h-auto text-xl aspect-square"
					to={`/blogpost${props.sourcePath}`}
				>
					<FontAwesomeIcon icon={faArrowRight} />
				</Link>
			</figure>
		</div>
	);
}

function Blog() {
	const [listedBlogs, setListedBlogs] = useState([]);
	function updateListedBlogs(newListedBlogs) {
		setListedBlogs(newListedBlogs);
	}
	const [query, setQuery] = useState("");
	function updateQuery(newQuery) {
		setQuery(newQuery);
	}

	useEffect(() => {
		updateListedBlogs(
			blogs.filter(
				(blog) =>
					blog.title.toLowerCase().includes(query.toLowerCase()) ||
					blog.description.toLowerCase().includes(query.toLowerCase())
			)
		);
	}, [query]);

	return (
		<div className="w-full p-10 gap-10 mt-16 min-h-screen">
			<div className="flex flex-col gap-10 max-w-[800px] ml-auto mr-auto">
				<h1 className="text-5xl font-bold mb-5 text-center">Blog</h1>
				<input
					type="text"
					placeholder="Search"
					className="input w-full"
					onChange={(e) => updateQuery(e.target.value)}
				/>
				{listedBlogs.map((blog, index) => (
					<BlogBlock
						title={blog.title}
						key={index}
						description={blog.description}
						sourcePath={blog.sourcePath}
					/>
				))}
			</div>
		</div>
	);
}

export default Blog;
