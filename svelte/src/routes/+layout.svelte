<script>
	import "../styles/output.css";
	import Navbar from "$lib/components/Navbar.svelte";
	import Footer from "$lib/components/Footer.svelte";
</script>

<Navbar />
<slot />
<Footer />
