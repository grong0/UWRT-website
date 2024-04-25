<script setup>
import { RouterLink } from "vue-router";
</script>

<template>
	<main>
		<div class="hero h-screen">
			<div class="hero-content text-center">
				<div class="max-w-md">
					<h1 class="text-5xl font-bold">Welcome to the E-Store</h1>
					<p class="py-6">We sell primarily men's clothing and accessories!</p>
				</div>
			</div>
		</div>
		<div class="hero w-full bg-base-100 h-[600px]">
			<div class="hero-content text-center">
				<div class="max-w-md">
					<h2 class="text-3xl font-bold">Ready to shop?</h2>
					<p class="py-6">Checkout our catalog to see our award winning selection!</p>
					<RouterLink class="btn btn-primary" to="/catalog">Catalog</RouterLink>
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
					<RouterLink class="btn btn-primary" to="/blog">Blog</RouterLink>
				</div>
			</div>
		</div>
	</main>
</template>
