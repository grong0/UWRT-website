import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

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
					href={`/blog/blogpost${props.sourcePath}`}
				>
					<FontAwesomeIcon icon={faArrowRight} />
				</Link>
			</figure>
		</div>
	);
}

export default BlogBlock;
