function CatalogItem(props) {
	return (
		<div className="card w-full bg-base-100 shadow-xl">
			<figure className="w-full aspect-square relative">
				<img src={props.imageURL} alt={props.imageALT} className="w-full h-full" />
				<div className="w-min h-min absolute right-2 bottom-2 rounded-xl bg-base-200 p-4 shadow-xl">
					<h2 className="font-bold text-primary text-xl">
						${parseFloat(props.price).toFixed(2)}
					</h2>
				</div>
			</figure>
			<div className="card-body">
				<h2 className="card-title">{props.name}</h2>
				<div className="w-full flex flex-row gap-2 mb-5 flex-wrap h-auto">
					{props.tags.map((item) => (
						<div className="badge badge-accent select-none font-bold">{item}</div>
					))}
				</div>
				<div className="card-actions justify-end mt-auto">
					<button className="btn mr-auto">Add to Cart</button>
					<button className="btn btn-primary">Buy Now</button>
				</div>
			</div>
		</div>
	);
}

export default CatalogItem;
