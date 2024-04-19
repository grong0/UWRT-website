import "../styles/Home.css";

function Home() {
	return (
		<>
			<div class="hero h-screen">
				<div class="hero-content text-center">
					<div class="max-w-md">
						<h1 class="text-5xl font-bold">Welcome to the E-Store</h1>
						<p class="py-6">
							We sell everything from rocks to kitchen supplies and toiletry to
							computer hardware. Anything you'll ever want, you'll find here, at
							E-Store.
						</p>
					</div>
				</div>
			</div>
			<div class="hero w-full bg-base-100 h-[600px]">
				<div class="hero-content text-center">
					<div class="max-w-md">
						<h2 class="text-3xl font-bold">Ready to shop?</h2>
						<p class="py-6">Checkout our catalog to see our award winning selection!</p>
						<a class="btn btn-primary" href="./catalog.html">
							Catalog
						</a>
					</div>
				</div>
			</div>
			<div class="hero w-full bg-base-200 h-[600px]">
				<div class="hero-content text-center">
					<div class="max-w-md">
						<h2 class="text-3xl font-bold">Want to get Updated?</h2>
						<p class="py-6">
							Checkout our amazing blog to stay updated on the latest and greatest!
						</p>
						<a class="btn btn-primary" href="./blog.html">
							Blog
						</a>
					</div>
				</div>
			</div>
		</>
	);
}

export default Home;
