<script lang="ts">
  import { theme } from '$lib/stores/theme';
  import Navbar from '$lib/components/Navbar.svelte';
  import Footer from '$lib/components/Footer.svelte';
  import '../app.css';
  let { children } = $props();
</script>

<div data-theme={$theme} class="app-root">
  <Navbar />
  <main>
    {@render children()}
  </main>
  <Footer />
</div>





