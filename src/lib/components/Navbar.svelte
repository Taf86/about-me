<script lang="ts">
	import { theme } from '$lib/stores/theme';
	import { getLocale, setLocale } from '$lib/paraglide/runtime';
	import { onMount } from 'svelte';
	import { m } from '$lib/paraglide/messages';
	import { It, Gb } from 'svelte-flag-icons';
	import Sun from './Sun.svelte';
	import Moon from './Moon.svelte';
	import Logo from './Logo.svelte';

	let scrolled = $state(false);
	let menuOpen = $state(false);

	onMount(() => {
		const handler = () => {
			scrolled = window.scrollY > 20;
		};
		window.addEventListener('scroll', handler);
		return () => window.removeEventListener('scroll', handler);
	});

	function scrollTo(id: string) {
		menuOpen = false;
		document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
	}

	function downloadCV() {
		const link = document.createElement('a');
		link.href = '/cv.pdf';
		link.download = 'Davide_Casadei_CV.pdf';
		link.click();
	}

	const navLinks = [
		['hero', m.nav_about()],
		['skills', m.nav_skills()],
		['experience', m.nav_experience()],
		['projects', m.nav_projects()],
		['contact', m.nav_contact()]
	];
</script>

<nav class:scrolled class:dark={$theme === 'dark'}>
	<div class="nav-inner">
		<div
			class="logo"
			onclick={() => scrollTo('hero')}
			onkeypress={() => scrollTo('hero')}
			role="button"
			tabindex="0"
		>
			<Logo />
		</div>

		<div class="nav-links" class:open={menuOpen}>
			{#each navLinks as [id, label] (id)}
				<button class="nav-link" onclick={() => scrollTo(id)}>{label}</button>
			{/each}
			<button class="btn-download" onclick={downloadCV}>
				<svg
					width="14"
					height="14"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="2.5"
				>
					<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
					<polyline points="7 10 12 15 17 10" />
					<line x1="12" y1="15" x2="12" y2="3" />
				</svg>
				{m.nav_downloadCV()}
			</button>
		</div>

		<div class="nav-controls">
			<button
				class="ctrl-btn"
				onclick={() => setLocale(getLocale() === 'it' ? 'en' : 'it')}
				title="Switch language"
			>
				{#if getLocale() === 'it'}
					<It size="1rem" />
				{:else}
					<Gb size="1rem" />
				{/if}
			</button>
			<button class="ctrl-btn theme-btn" onclick={() => theme.toggle()} title="Toggle theme">
				{#if $theme === 'dark'}
					<Sun />
				{:else}
					<Moon />
				{/if}
			</button>
		</div>
	</div>
</nav>

<style>
	nav {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		z-index: 100;
		padding: 1rem 0;
		transition: all 0.3s ease;
	}
	nav.scrolled {
		background: var(--nav-bg);
		backdrop-filter: blur(12px);
		border-bottom: 1px solid var(--border);
		padding: 0.6rem 0;
	}
	.nav-inner {
		max-width: 1100px;
		margin: 0 auto;
		padding: 0 1.5rem;
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 1rem;
	}
	.logo {
		font-family: 'JetBrains Mono', 'Fira Code', monospace;
		font-size: 1.3rem;
		font-weight: 700;
		cursor: pointer;
		color: var(--text);
		letter-spacing: -0.03em;
	}
	.logo-bracket {
		color: var(--accent);
	}
	.nav-links {
		display: flex;
		align-items: center;
		gap: 0.25rem;
	}
	.nav-link {
		background: none;
		border: none;
		color: var(--text-muted);
		font-size: 0.875rem;
		font-weight: 500;
		cursor: pointer;
		padding: 0.4rem 0.75rem;
		border-radius: 6px;
		transition: all 0.2s;
		font-family: inherit;
	}
	.nav-link:hover {
		color: var(--text);
		background: var(--surface);
	}
	.btn-download {
		display: flex;
		align-items: center;
		gap: 0.4rem;
		background: var(--accent);
		color: white;
		border: none;
		padding: 0.45rem 1rem;
		border-radius: 6px;
		font-size: 0.875rem;
		font-weight: 600;
		cursor: pointer;
		transition: all 0.2s;
		margin-left: 0.5rem;
		font-family: inherit;
	}
	.btn-download:hover {
		background: var(--accent-hover);
		transform: translateY(-1px);
	}
	.nav-controls {
		display: flex;
		align-items: center;
		gap: 0.5rem;
	}
	.ctrl-btn {
		background: var(--surface);
		border: 1px solid var(--border);
		color: var(--text);
		width: 36px;
		height: 36px;
		border-radius: 8px;
		cursor: pointer;
		display: flex;
		align-items: center;
		justify-content: center;
		transition: all 0.2s;
		font-family: inherit;
	}
	.ctrl-btn:hover {
		background: var(--surface-hover);
	}

	@media (max-width: 768px) {
		.nav-links {
			display: none;
			position: absolute;
			top: 100%;
			left: 0;
			right: 0;
			background: var(--bg);
			border-bottom: 1px solid var(--border);
			flex-direction: column;
			padding: 1rem;
			gap: 0.5rem;
		}
		.nav-links.open {
			display: flex;
		}
		.nav-link {
			width: 100%;
			text-align: left;
		}
		.btn-download {
			width: 100%;
			justify-content: center;
			margin-left: 0;
		}
	}
</style>
