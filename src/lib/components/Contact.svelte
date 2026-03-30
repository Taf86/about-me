<script lang="ts">
	import { animate } from '$lib/actions/animate';
	import { config } from '$lib/config';
	import { m } from '$lib/paraglide/messages';
</script>

<section id="contact" class="section">
	<div class="container">
		<div use:animate={{ type: 'fade' }}>
			<div class="section-label">Contact</div>
			<h2 class="section-title">{m.contact_title()}</h2>
			<p class="section-subtitle">{m.contact_subtitle()}</p>
		</div>

		<div class="contact-grid">
			<div class="contact-info" use:animate={{ type: 'slide-left', delay: 100 }}>
				<div class="info-cards">
					<a href={`mailto:${config.email}`} class="info-card">
						<div class="info-icon">
							<svg
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								stroke-width="2"
								width="22"
								height="22"
							>
								<path
									d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"
								/>
								<polyline points="22,6 12,13 2,6" />
							</svg>
						</div>
						<div>
							<span class="info-label">{m.contact_email()}</span>
							<span class="info-value">{config.email}</span>
						</div>
					</a>

					<div class="info-card">
						<div class="info-icon">
							<svg
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								stroke-width="2"
								width="22"
								height="22"
							>
								<path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
								<circle cx="12" cy="10" r="3" />
							</svg>
						</div>
						<div>
							<span class="info-label">{m.contact_location()}</span>
							<span class="info-value">{m.contact_locationValue()}</span>
						</div>
					</div>

					<div class="info-card available">
						<div class="info-icon green">
							<svg
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								stroke-width="2"
								width="22"
								height="22"
							>
								<path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
								<polyline points="22 4 12 14.01 9 11.01" />
							</svg>
						</div>
						<div>
							<span class="info-value">{m.contact_available()}</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<style>
	.contact-grid {
		display: grid;
		grid-template-columns: 1fr 1.5fr;
		gap: 3rem;
		align-items: start;
	}
	.info-cards {
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}
	.info-card {
		display: flex;
		align-items: center;
		gap: 1rem;
		background: var(--surface);
		border: 1px solid var(--border);
		border-radius: 12px;
		padding: 1.25rem;
		text-decoration: none;
		color: inherit;
		transition: all 0.2s;
	}
	.info-card:hover {
		border-color: var(--accent);
		transform: translateX(4px);
	}
	.info-card.available {
		border-color: rgba(34, 197, 94, 0.3);
	}
	.info-icon {
		width: 44px;
		height: 44px;
		background: var(--accent-bg);
		border-radius: 10px;
		display: flex;
		align-items: center;
		justify-content: center;
		color: var(--accent);
		flex-shrink: 0;
	}
	.info-icon.green {
		background: rgba(34, 197, 94, 0.1);
		color: #22c55e;
	}
	.info-icon :global(svg) {
		color: inherit;
	}
	.info-label {
		display: block;
		font-size: 0.75rem;
		color: var(--text-muted);
		margin-bottom: 0.2rem;
	}
	.info-value {
		display: block;
		font-size: 0.9rem;
		font-weight: 500;
	}

	@media (max-width: 768px) {
		.contact-grid {
			grid-template-columns: 1fr;
			gap: 2rem;
		}
	}
</style>
