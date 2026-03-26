<script lang="ts">
	import { animate } from '$lib/actions/animate';
	import { m } from '$lib/paraglide/messages';

	const jobs = [
		{
			role: m.experience_job_0_role(),
			company: m.experience_job_0_company(),
			period: m.experience_job_0_period(),
			description: m.experience_job_0_description(),
			tags: [
				'Node.js',
				'Typescript',
				'Javascript',
				'Express',
				'NestJS',
				'MongoDB',
				'Redis',
				'PostgreSQL',
				'React',
				'TailwindCSS'
			]
		},
		{
			role: m.experience_job_1_role(),
			company: m.experience_job_1_company(),
			period: m.experience_job_1_period(),
			description: m.experience_job_1_description(),
			tags: [
				'Node.js',
				'Typescript',
				'Javascript',
				'Express',
				'MongoDB',
				'React',
				'Android',
				'KMP',
				'Kotlin'
			]
		},
		{
			role: m.experience_job_2_role(),
			company: m.experience_job_2_company(),
			period: m.experience_job_2_period(),
			description: m.experience_job_2_description(),
			tags: ['C#', '.NET', 'MVC', 'Javascript']
		},
		{
			role: m.experience_job_3_role(),
			company: m.experience_job_3_company(),
			period: m.experience_job_3_period(),
			description: m.experience_job_3_description(),
			tags: ['SAP', 'SAP-CRM', 'ABAP']
		}
	];
</script>

<section id="experience" class="section">
	<div class="container">
		<div use:animate={{ type: 'fade' }}>
			<div class="section-label">Experience</div>
			<h2 class="section-title">{m.experience_title()}</h2>
			<p class="section-subtitle">{m.experience_subtitle()}</p>
		</div>

		<div class="timeline">
			{#each jobs as job, i (job.period)}
				<div class="timeline-item" use:animate={{ type: 'slide-up', delay: i * 100 }}>
					<div class="timeline-dot"></div>
					<div class="timeline-card">
						<div class="card-header">
							<div>
								<h3 class="role">{job.role}</h3>
								<span class="company">{job.company}</span>
							</div>
							<span class="period">{job.period}</span>
						</div>
						<p class="description">{job.description}</p>
						<div class="tag-row">
							{#each job.tags as tag (tag)}
								<span class="tag">{tag}</span>
							{/each}
						</div>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>

<style>
	.timeline {
		position: relative;
		padding-left: 2rem;
	}
	.timeline::before {
		content: '';
		position: absolute;
		left: 7px;
		top: 12px;
		bottom: 0;
		width: 2px;
		background: linear-gradient(to bottom, var(--accent), transparent);
	}
	.timeline-item {
		position: relative;
		margin-bottom: 2rem;
	}
	.timeline-dot {
		position: absolute;
		left: -2rem;
		top: 1.2rem;
		width: 14px;
		height: 14px;
		background: var(--accent);
		border-radius: 50%;
		border: 3px solid var(--bg);
		box-shadow: 0 0 0 2px var(--accent);
	}
	.timeline-card {
		background: var(--surface);
		border: 1px solid var(--border);
		border-radius: 16px;
		padding: 1.75rem;
		transition:
			transform 0.2s,
			border-color 0.2s;
	}
	.timeline-card:hover {
		transform: translateX(4px);
		border-color: var(--accent);
	}
	.card-header {
		display: flex;
		justify-content: space-between;
		align-items: flex-start;
		gap: 1rem;
		margin-bottom: 0.75rem;
		flex-wrap: wrap;
	}
	.role {
		font-size: 1.1rem;
		font-weight: 700;
		color: var(--text);
		margin-bottom: 0.2rem;
	}
	.company {
		font-size: 0.875rem;
		color: var(--accent);
		font-weight: 500;
	}
	.period {
		font-size: 0.78rem;
		color: var(--text-muted);
		background: var(--surface-hover);
		padding: 0.25rem 0.75rem;
		border-radius: 100px;
		white-space: nowrap;
		font-family: 'JetBrains Mono', monospace;
		border: 1px solid var(--border);
	}
	.description {
		font-size: 0.9rem;
		color: var(--text-muted);
		line-height: 1.7;
		margin-bottom: 1rem;
	}
	.tag-row {
		display: flex;
		flex-wrap: wrap;
		gap: 0.4rem;
	}
	.tag {
		font-size: 0.75rem;
		font-weight: 500;
		background: var(--accent-bg);
		color: var(--accent);
		padding: 0.2rem 0.6rem;
		border-radius: 4px;
		font-family: 'JetBrains Mono', monospace;
	}
</style>
