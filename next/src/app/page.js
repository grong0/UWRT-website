import Link from "next/link";

export default function Home() {
	return (
		<>
			<div className="hero h-screen">
				<div className="hero-content text-center">
					<div className="max-w-md">
						<h1 className="text-5xl font-bold">Welcome to the E-Store</h1>
						<p className="py-6">We sell primarily men's clothing and accessories!</p>
					</div>
				</div>
			</div>
			<div className="hero w-full bg-base-100 h-[600px]">
				<div className="hero-content text-center">
					<div className="max-w-md">
						<h2 className="text-3xl font-bold">Ready to shop?</h2>
						<p className="py-6">
							Checkout our catalog to see our award winning selection!
						</p>
						<Link className="btn btn-primary" href="/catalog">
							Catalog
						</Link>
					</div>
				</div>
			</div>
			<div className="hero w-full bg-base-200 h-[600px]">
				<div className="hero-content text-center">
					<div className="max-w-md">
						<h2 className="text-3xl font-bold">Want to get Updated?</h2>
						<p className="py-6">
							Checkout our amazing blog to stay updated on the latest and greatest!
						</p>
						<Link className="btn btn-primary" href="/blog">
							Blog
						</Link>
					</div>
				</div>
			</div>
		</>
	);
}
