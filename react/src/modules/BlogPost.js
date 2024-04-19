import "../styles/BlogPost.css";

function BlogPost() {
	return (
		<div class="w-full flex justify-center py-20">
			<article class="prose lg:prose-xl dark:prose-invert prose-img:rounded-xl prose-img:w-full">
				<header>
					<h1>Lorem Ipsum</h1>
					<p class="not-prose -mt-10 italic">John Doe</p>
				</header>

				<h2>Lorem Ipsum</h2>
				<p>
					&emsp;Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore magnam
					repellendus aspernatur, blanditiis quas debitis, voluptatem eaque totam numquam
					cupiditate a quod dignissimos, quae quia laudantium dolorem vero impedit enim.
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro maxime minima
					labore neque praesentium consequuntur unde, qui, aperiam est vel autem facilis
					soluta veniam at reiciendis ipsa voluptatem. Nisi, assumenda. Lorem ipsum dolor
					sit, amet consectetur adipisicing elit. Sapiente dolorum molestiae corporis
					aliquam, non, laboriosam ratione, earum suscipit praesentium dignissimos eum quo
					reprehenderit harum veniam consequuntur nostrum? Optio, veniam necessitatibus!
				</p>
				<figure>
					<img src="https://placehold.co/1920x1080" />
					<figcaption>An image test for 16:9 images</figcaption>
				</figure>
				<h2>Lorem Ipsum</h2>
				<p>
					&emsp;Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto, esse
					corrupti ducimus repellendus voluptas nemo assumenda quas eius iure quis ab, id
					dolorem repudiandae tempora adipisci quos deserunt. Nostrum, debitis! Lorem
					ipsum dolor sit amet consectetur adipisicing elit. Temporibus consequatur
					sapiente asperiores veritatis placeat, odio dolorem blanditiis? Corrupti neque
					aliquam illo aut, in, corporis consectetur quas quod laudantium, distinctio vel.
				</p>
				<blockquote>
					Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium tempore
					praesentium rem quis quas quia veniam, sed perferendis voluptas ipsum, sint
					asperiores, recusandae fuga tenetur commodi rerum reprehenderit nostrum
					inventore.
				</blockquote>
				<h2>Lorem Ipsum</h2>
				<p>
					&emsp;Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae optio
					illum aperiam dolorem fugiat vitae, debitis incidunt nemo vel magnam, placeat
					dolor laboriosam amet! Architecto, obcaecati incidunt. Quia, deleniti
					repudiandae. Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
					quae perferendis similique officia, eveniet, fugit at ipsum commodi natus vitae,
					a reiciendis laboriosam dolores molestiae ut suscipit eum error ipsam. Lorem
					ipsum dolor sit amet consectetur adipisicing elit. Saepe similique a neque atque
					ipsum officiis. Non, expedita! Nesciunt quibusdam libero labore cum error nemo!
					Neque sint cum itaque nobis fuga.
				</p>
				<figure>
					<img src="https://placehold.co/500x500" />
					<figcaption>An image test for sqaure images</figcaption>
				</figure>
			</article>
		</div>
	);
}

export default BlogPost;
