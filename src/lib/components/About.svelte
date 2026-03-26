<script lang="ts">
	import { animate } from '$lib/actions/animate';
	import { m } from '$lib/paraglide/messages';

	const cards = [
		{ value: '10+', label: m.about_yearsExp() },
		{ value: '40+', label: m.about_projects() }
	];
</script>

<section id="about" class="section section-alt">
	<div class="container">
		<div use:animate={{ type: 'fade' }}>
			<div class="section-label">About</div>
			<h2 class="section-title">{m.about_title()}</h2>
		</div>

		<div class="about-grid">
			<div class="about-text" use:animate={{ type: 'slide-left', delay: 100 }}>
				<p>{m.about_description1()}</p>
				<p>{m.about_description2()}</p>

				<div class="about-tags">
					{#each ['Clean Code', 'SOLID', 'TDD', 'Nodejs', 'Typescript', 'Android', 'Kotlin'] as tag (tag)}
						<span class="tag">#{tag}</span>
					{/each}
				</div>
			</div>

			<div class="stats-grid" use:animate={{ type: 'slide-right', delay: 150 }}>
				{#each cards as stat (stat.label)}
					<div class="stat-card">
						<span class="stat-value">{stat.value}</span>
						<span class="stat-label">{stat.label}</span>
					</div>
				{/each}
			</div>
		</div>
	</div>
</section>

<style>
	.about-grid {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 4rem;
		align-items: start;
	}
	.about-text p {
		color: var(--text-muted);
		line-height: 1.8;
		margin-bottom: 1.25rem;
		font-size: 1.05rem;
	}
	.about-tags {
		display: flex;
		flex-wrap: wrap;
		gap: 0.5rem;
		margin-top: 1.5rem;
	}
	.tag {
		font-family: 'JetBrains Mono', monospace;
		font-size: 0.78rem;
		color: var(--accent);
		background: var(--accent-bg);
		padding: 0.25rem 0.6rem;
		border-radius: 4px;
	}
	.stats-grid {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 1rem;
	}
	.stat-card {
		background: var(--surface);
		border: 1px solid var(--border);
		border-radius: 16px;
		padding: 1.75rem 1.5rem;
		display: flex;
		flex-direction: column;
		gap: 0.4rem;
		transition: transform 0.2s;
	}
	.stat-card:hover {
		transform: translateY(-3px);
	}
	.stat-value {
		font-size: 2.5rem;
		font-weight: 800;
		color: var(--accent);
		letter-spacing: -0.04em;
		line-height: 1;
	}
	.stat-label {
		font-size: 0.82rem;
		color: var(--text-muted);
		font-weight: 500;
	}
	@media (max-width: 768px) {
		.about-grid {
			grid-template-columns: 1fr;
			gap: 2rem;
		}
	}
</style>
