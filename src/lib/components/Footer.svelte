<script lang="ts">
	import Logo from './Logo.svelte';

	const year = new Date().getFullYear();
</script>

<footer>
	<div class="container">
		<div class="footer-inner">
			<span class="logo">
				<Logo />
			</span>
			<p class="footer-text">
				$t.footer.madeWith ❤️ $t.footer.and ☕ — Davide Casadei © {year}. $t.footer.rights.
			</p>
			<div class="footer-links">
				<a href="https://github.com" target="_blank" rel="noreferrer">GitHub</a>
				<a href="https://linkedin.com" target="_blank" rel="noreferrer">LinkedIn</a>
			</div>
		</div>
	</div>
</footer>

<style>
	footer {
		border-top: 1px solid var(--border);
		padding: 2rem 1.5rem;
		margin-top: 0;
	}
	.footer-inner {
		max-width: 1100px;
		margin: 0 auto;
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 1rem;
		flex-wrap: wrap;
	}
	.logo {
		font-family: 'JetBrains Mono', monospace;
		font-weight: 700;
		font-size: 1.1rem;
	}
	.bracket {
		color: var(--accent);
	}
	.footer-text {
		font-size: 0.82rem;
		color: var(--text-muted);
	}
	.footer-links {
		display: flex;
		gap: 1rem;
	}
	.footer-links a {
		font-size: 0.82rem;
		color: var(--text-muted);
		text-decoration: none;
		transition: color 0.2s;
	}
	.footer-links a:hover {
		color: var(--accent);
	}
</style>
