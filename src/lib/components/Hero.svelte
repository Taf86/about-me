<script lang="ts">
	import { onMount } from 'svelte';
	import { m } from '$lib/paraglide/messages';
	import { config } from '$lib/config';

	let visible = $state(false);
	onMount(() => setTimeout(() => (visible = true), 100));

	function scrollToSection(id: string) {
		document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
	}
</script>

<section id="hero" class="hero">
	<div class="hero-bg">
		<div class="grid-overlay"></div>
		<div class="blob blob-1"></div>
		<div class="blob blob-2"></div>
	</div>

	<div class="hero-content" class:visible>
		<div class="badge">
			<span class="dot"></span>
			{m.hero_availableForWork()}
		</div>
		<h1>
			<span class="greeting">{m.hero_greeting()}</span>
			<br />
			<span class="name">{m.hero_name()}</span>
		</h1>
		<div class="title-line">
			<span class="title-text">{m.hero_title()}</span>
		</div>
		<p class="subtitle">{m.hero_subtitle()}</p>
		<div class="cta-group">
			<button class="btn-primary" onclick={() => scrollToSection('experience')}>
				{m.hero_cta()}
				<svg
					width="16"
					height="16"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="2.5"
				>
					<path d="M5 12h14M12 5l7 7-7 7" />
				</svg>
			</button>
		</div>
		<div class="social-links">
			<a
				href={config.github}
				target="_blank"
				rel="noopener noreferrer external"
				aria-label="GitHub"
			>
				<svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
					<path
						d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z"
					/>
				</svg>
			</a>
			<a
				href={config.linkedin}
				target="_blank"
				rel="noopener noreferrer external"
				aria-label="LinkedIn"
			>
				<svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
					<path
						d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
					/>
				</svg>
			</a>
			<a href={`mailto:${config.email}`} aria-label="Email">
				<svg
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="2"
					width="20"
					height="20"
				>
					<path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
					<polyline points="22,6 12,13 2,6" />
				</svg>
			</a>
		</div>
	</div>

	<div class="scroll-hint" class:visible>
		<span>scroll</span>
		<div class="scroll-line"></div>
	</div>
</section>

<style>
	.hero {
		min-height: 100vh;
		display: flex;
		align-items: center;
		position: relative;
		overflow: hidden;
		padding: 6rem 1.5rem 4rem;
	}
	.hero-bg {
		position: absolute;
		inset: 0;
		pointer-events: none;
	}
	.grid-overlay {
		position: absolute;
		inset: 0;
		background-image:
			linear-gradient(var(--grid-line) 1px, transparent 1px),
			linear-gradient(90deg, var(--grid-line) 1px, transparent 1px);
		background-size: 60px 60px;
		opacity: 0.4;
	}
	.blob {
		position: absolute;
		border-radius: 50%;
		filter: blur(80px);
		opacity: 0.25;
	}
	.blob-1 {
		width: 500px;
		height: 500px;
		background: var(--accent);
		top: -150px;
		right: -100px;
		animation: float 8s ease-in-out infinite;
	}
	.blob-2 {
		width: 400px;
		height: 400px;
		background: var(--accent-2);
		bottom: -100px;
		left: -100px;
		animation: float 10s ease-in-out infinite reverse;
	}
	@keyframes float {
		0%,
		100% {
			transform: translate(0, 0) scale(1);
		}
		50% {
			transform: translate(20px, -20px) scale(1.05);
		}
	}
	.hero-content {
		max-width: 700px;
		margin: 0 auto;
		opacity: 0;
		transform: translateY(20px);
		transition: all 0.8s ease;
	}
	.hero-content.visible {
		opacity: 1;
		transform: translateY(0);
	}
	.badge {
		display: inline-flex;
		align-items: center;
		gap: 0.5rem;
		background: var(--surface);
		border: 1px solid var(--border);
		border-radius: 100px;
		padding: 0.35rem 1rem;
		font-size: 0.8rem;
		font-weight: 500;
		color: var(--text-muted);
		margin-bottom: 1.5rem;
	}
	.dot {
		width: 7px;
		height: 7px;
		background: #22c55e;
		border-radius: 50%;
		animation: pulse 2s infinite;
	}
	@keyframes pulse {
		0%,
		100% {
			opacity: 1;
			box-shadow: 0 0 0 0 rgba(34, 197, 94, 0.4);
		}
		50% {
			opacity: 0.8;
			box-shadow: 0 0 0 6px rgba(34, 197, 94, 0);
		}
	}
	h1 {
		font-size: clamp(2.8rem, 7vw, 5rem);
		font-weight: 800;
		line-height: 1.1;
		letter-spacing: -0.04em;
		margin-bottom: 0.5rem;
	}
	.greeting {
		color: var(--text-muted);
		font-size: 0.55em;
		font-weight: 400;
		letter-spacing: 0.1em;
		text-transform: uppercase;
	}
	.name {
		color: var(--text);
		background: linear-gradient(135deg, var(--text) 0%, var(--accent) 100%);
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		background-clip: text;
	}
	.title-line {
		margin-bottom: 1.25rem;
	}
	.title-text {
		font-family: 'JetBrains Mono', 'Fira Code', monospace;
		font-size: clamp(1rem, 2.5vw, 1.3rem);
		color: var(--accent);
		font-weight: 500;
		background: var(--surface);
		padding: 0.3rem 0.8rem;
		border-radius: 4px;
		border-left: 3px solid var(--accent);
	}
	.subtitle {
		font-size: clamp(1rem, 2vw, 1.15rem);
		color: var(--text-muted);
		max-width: 560px;
		line-height: 1.7;
		margin-bottom: 2rem;
	}
	.cta-group {
		display: flex;
		gap: 1rem;
		flex-wrap: wrap;
		margin-bottom: 2.5rem;
	}
	.btn-primary {
		display: flex;
		align-items: center;
		gap: 0.5rem;
		background: var(--accent);
		color: white;
		border: none;
		padding: 0.75rem 1.5rem;
		border-radius: 8px;
		font-size: 0.95rem;
		font-weight: 600;
		cursor: pointer;
		transition: all 0.2s;
		font-family: inherit;
	}
	.btn-primary:hover {
		background: var(--accent-hover);
		transform: translateY(-2px);
		box-shadow: 0 8px 24px rgba(99, 102, 241, 0.35);
	}

	.social-links {
		display: flex;
		gap: 0.75rem;
	}
	.social-links a {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 40px;
		height: 40px;
		background: var(--surface);
		border: 1px solid var(--border);
		border-radius: 8px;
		color: var(--text-muted);
		transition: all 0.2s;
		text-decoration: none;
	}
	.social-links a:hover {
		color: var(--accent);
		border-color: var(--accent);
		transform: translateY(-2px);
	}
	.scroll-hint {
		position: absolute;
		bottom: 2rem;
		left: 50%;
		transform: translateX(-50%);
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 0.5rem;
		opacity: 0;
		transition: opacity 1s ease 1.5s;
		color: var(--text-muted);
		font-size: 0.7rem;
		letter-spacing: 0.15em;
		text-transform: uppercase;
	}
	.scroll-hint.visible {
		opacity: 1;
	}
	.scroll-line {
		width: 1px;
		height: 40px;
		background: linear-gradient(to bottom, var(--text-muted), transparent);
		animation: scrollDown 2s ease-in-out infinite;
	}
	@keyframes scrollDown {
		0% {
			transform: scaleY(0);
			transform-origin: top;
		}
		50% {
			transform: scaleY(1);
			transform-origin: top;
		}
		51% {
			transform: scaleY(1);
			transform-origin: bottom;
		}
		100% {
			transform: scaleY(0);
			transform-origin: bottom;
		}
	}
</style>
