<script setup>
import { RouterLink } from "vue-router";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
</script>
<template lang="">
	<div class="navbar bg-base-100 absolute top-0">
		<div class="flex-1">
			<RouterLink class="btn btn-ghost text-xl" to="/"> E-Store </RouterLink>
			<RouterLink class="btn btn-ghost text-l" to="/catalog"> Catalog </RouterLink>
			<RouterLink class="btn btn-ghost text-l" to="/blog"> Blog </RouterLink>
		</div>
		<div class="flex-none">
			<label class="text-xl swap swap-rotate btn btn-square btn-ghost">
				<input type="checkbox" class="theme-controller" value="light" />
				<FontAwesomeIcon class="swap-on fill-current" icon="sun"></FontAwesomeIcon>
				<FontAwesomeIcon class="swap-off fill-current" icon="moon"></FontAwesomeIcon>
			</label>
			<button class="btn btn-square btn-ghost text-xl">
				<FontAwesomeIcon icon="shopping-cart"></FontAwesomeIcon>
			</button>
		</div>
	</div>
</template>
