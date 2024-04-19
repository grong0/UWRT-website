import "../styles/Catalog.css";

function Catalog() {
	return (
		<div class="flex flex-col w-full p-10">
			<div class="flex flex-row w-full gap-10">
				<h1 class="text-5xl font-bold mb-10">Catalog</h1>
				<div class="flex flex-row gap-2">
					<input type="text" placeholder="Search" class="input input-bordered w-full" />
					<div class="dropdown dropdown-bottom dropdown-end">
						<div class="dropdown dropdown-end">
							<div tabindex="0" role="button" class="btn btn-outline m-0">
								Tags
							</div>
							<ul
								tabindex="0"
								class="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52 mt-2"
							>
								<li>
									<a>Tag</a>
								</li>
								<li>
									<a>Tag</a>
								</li>
								<li>
									<a>Tag</a>
								</li>
							</ul>
						</div>
					</div>
					<div class="dropdown dropdown-bottom dropdown-end">
						<div class="dropdown dropdown-end">
							<div tabindex="0" role="button" class="btn btn-outline m-0">
								Sort
							</div>
							<ul
								tabindex="0"
								class="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52 mt-2"
							>
								<li>
									<a>High to Low</a>
								</li>
								<li>
									<a>Low to High</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>

			<div class="w-full">
				<div class="grid grid-cols-4 gap-10 col-start-2 col-end-5 min-h-screen">
					<div class="card w-full bg-base-100 shadow-xl">
						<figure>
							<img src="https://placehold.co/600x400" alt="Shoes" />
						</figure>
						<div class="card-body">
							<h2 class="card-title">Lorem Ipsum</h2>
							<div class="w-full">
								<div class="badge badge-accent">Tag</div>
								<div class="badge badge-accent">Tag</div>
							</div>
							<p>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
								consectetur rem tempora.
							</p>
							<div class="card-actions justify-end">
								<button class="btn mr-auto">Add to Cart</button>
								<button class="btn btn-primary">Buy Now</button>
							</div>
						</div>
					</div>
					<div class="card w-full bg-base-100 shadow-xl">
						<figure>
							<img src="https://placehold.co/600x400" alt="Shoes" />
						</figure>
						<div class="card-body">
							<h2 class="card-title">Lorem Ipsum</h2>
							<div class="w-full">
								<div class="badge badge-accent">Tag</div>
								<div class="badge badge-accent">Tag</div>
							</div>
							<p>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
								consectetur rem tempora.
							</p>
							<div class="card-actions justify-end">
								<button class="btn mr-auto">Add to Cart</button>
								<button class="btn btn-primary">Buy Now</button>
							</div>
						</div>
					</div>
					<div class="card w-full bg-base-100 shadow-xl">
						<figure>
							<img src="https://placehold.co/600x400" alt="Shoes" />
						</figure>
						<div class="card-body">
							<h2 class="card-title">Lorem Ipsum</h2>
							<div class="w-full">
								<div class="badge badge-accent">Tag</div>
								<div class="badge badge-accent">Tag</div>
							</div>
							<p>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
								consectetur rem tempora.
							</p>
							<div class="card-actions justify-end">
								<button class="btn mr-auto">Add to Cart</button>
								<button class="btn btn-primary">Buy Now</button>
							</div>
						</div>
					</div>
					<div class="card w-full bg-base-100 shadow-xl">
						<figure>
							<img src="https://placehold.co/600x400" alt="Shoes" />
						</figure>
						<div class="card-body">
							<h2 class="card-title">Lorem Ipsum</h2>
							<div class="w-full">
								<div class="badge badge-accent">Tag</div>
								<div class="badge badge-accent">Tag</div>
							</div>
							<p>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
								consectetur rem tempora.
							</p>
							<div class="card-actions justify-end">
								<button class="btn mr-auto">Add to Cart</button>
								<button class="btn btn-primary">Buy Now</button>
							</div>
						</div>
					</div>
					<div class="card w-full bg-base-100 shadow-xl">
						<figure>
							<img src="https://placehold.co/600x400" alt="Shoes" />
						</figure>
						<div class="card-body">
							<h2 class="card-title">Lorem Ipsum</h2>
							<div class="w-full">
								<div class="badge badge-accent">Tag</div>
								<div class="badge badge-accent">Tag</div>
							</div>
							<p>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
								consectetur rem tempora.
							</p>
							<div class="card-actions justify-end">
								<button class="btn mr-auto">Add to Cart</button>
								<button class="btn btn-primary">Buy Now</button>
							</div>
						</div>
					</div>
					<div class="card w-full bg-base-100 shadow-xl">
						<figure>
							<img src="https://placehold.co/600x400" alt="Shoes" />
						</figure>
						<div class="card-body">
							<h2 class="card-title">Lorem Ipsum</h2>
							<div class="w-full">
								<div class="badge badge-accent">Tag</div>
								<div class="badge badge-accent">Tag</div>
							</div>
							<p>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
								consectetur rem tempora.
							</p>
							<div class="card-actions justify-end">
								<button class="btn mr-auto">Add to Cart</button>
								<button class="btn btn-primary">Buy Now</button>
							</div>
						</div>
					</div>
					<div class="card w-full bg-base-100 shadow-xl">
						<figure>
							<img src="https://placehold.co/600x400" alt="Shoes" />
						</figure>
						<div class="card-body">
							<h2 class="card-title">Lorem Ipsum</h2>
							<div class="w-full">
								<div class="badge badge-accent">Tag</div>
								<div class="badge badge-accent">Tag</div>
							</div>
							<p>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
								consectetur rem tempora.
							</p>
							<div class="card-actions justify-end">
								<button class="btn mr-auto">Add to Cart</button>
								<button class="btn btn-primary">Buy Now</button>
							</div>
						</div>
					</div>
					<div class="card w-full bg-base-100 shadow-xl">
						<figure>
							<img src="https://placehold.co/600x400" alt="Shoes" />
						</figure>
						<div class="card-body">
							<h2 class="card-title">Lorem Ipsum</h2>
							<div class="w-full">
								<div class="badge badge-accent">Tag</div>
								<div class="badge badge-accent">Tag</div>
							</div>
							<p>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
								consectetur rem tempora.
							</p>
							<div class="card-actions justify-end">
								<button class="btn mr-auto">Add to Cart</button>
								<button class="btn btn-primary">Buy Now</button>
							</div>
						</div>
					</div>
					<div class="card w-full bg-base-100 shadow-xl">
						<figure>
							<img src="https://placehold.co/600x400" alt="Shoes" />
						</figure>
						<div class="card-body">
							<h2 class="card-title">Lorem Ipsum</h2>
							<div class="w-full">
								<div class="badge badge-accent">Tag</div>
								<div class="badge badge-accent">Tag</div>
							</div>
							<p>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
								consectetur rem tempora.
							</p>
							<div class="card-actions justify-end">
								<button class="btn mr-auto">Add to Cart</button>
								<button class="btn btn-primary">Buy Now</button>
							</div>
						</div>
					</div>
					<div class="card w-full bg-base-100 shadow-xl">
						<figure>
							<img src="https://placehold.co/600x400" alt="Shoes" />
						</figure>
						<div class="card-body">
							<h2 class="card-title">Lorem Ipsum</h2>
							<div class="w-full">
								<div class="badge badge-accent">Tag</div>
								<div class="badge badge-accent">Tag</div>
							</div>
							<p>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
								consectetur rem tempora.
							</p>
							<div class="card-actions justify-end">
								<button class="btn mr-auto">Add to Cart</button>
								<button class="btn btn-primary">Buy Now</button>
							</div>
						</div>
					</div>
					<div class="card w-full bg-base-100 shadow-xl">
						<figure>
							<img src="https://placehold.co/600x400" alt="Shoes" />
						</figure>
						<div class="card-body">
							<h2 class="card-title">Lorem Ipsum</h2>
							<div class="w-full">
								<div class="badge badge-accent">Tag</div>
								<div class="badge badge-accent">Tag</div>
							</div>
							<p>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
								consectetur rem tempora.
							</p>
							<div class="card-actions justify-end">
								<button class="btn mr-auto">Add to Cart</button>
								<button class="btn btn-primary">Buy Now</button>
							</div>
						</div>
					</div>
					<div class="card w-full bg-base-100 shadow-xl">
						<figure>
							<img src="https://placehold.co/600x400" alt="Shoes" />
						</figure>
						<div class="card-body">
							<h2 class="card-title">Lorem Ipsum</h2>
							<div class="w-full">
								<div class="badge badge-accent">Tag</div>
								<div class="badge badge-accent">Tag</div>
							</div>
							<p>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
								consectetur rem tempora.
							</p>
							<div class="card-actions justify-end">
								<button class="btn mr-auto">Add to Cart</button>
								<button class="btn btn-primary">Buy Now</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Catalog;
