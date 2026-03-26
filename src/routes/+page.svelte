<script lang="ts">
	import Hero from '$lib/components/Hero.svelte';
	import Skills from '$lib/components/Skills.svelte';
	import Experience from '$lib/components/Experience.svelte';
	import Contact from '$lib/components/Contact.svelte';
</script>

<svelte:head>
	<title>Davide Casadei — Fullstack Developer</title>
	<meta
		name="description"
		content="Fullstack Developer specializzato in Node.js, TypeScript e React."
	/>
	<meta property="og:title" content="Davide Casadei — Fullstack Developer" />
	<meta
		property="og:description"
		content="Portfolio e CV online di Davide Casadei, Fullstack Developer."
	/>
</svelte:head>

<Hero />
<Skills />
<Experience />
<Contact />
