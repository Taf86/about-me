<script lang="ts">
	import { animate } from '$lib/actions/animate';
	import { m } from '$lib/paraglide/messages';

	const frontendSkills = [
		{ name: 'TypeScript', level: 94, icon: 'typescript.svg' },
		{ name: 'React', level: 82, icon: 'react.svg' },
		{ name: 'SvelteKit', level: 60, icon: 'svelte.svg' },
		{ name: 'CSS', level: 75, icon: 'css.svg' },
		{ name: 'Android', level: 87, icon: 'android.svg' }
	];

	const backendSkills = [
		{ name: 'Node.js', level: 92, icon: 'nodejs.svg' },
		{ name: 'MongoDB', level: 88, icon: 'mongodb.svg' },
		{ name: 'Redis', level: 75, icon: 'redis.svg' },
		{ name: 'GraphQL', level: 93, icon: 'graphql.svg' },
		{ name: 'PostgreSQL', level: 90, icon: 'postgresql.svg' }
	];

	const toolSkills = [
		{ name: 'Docker', level: 78, icon: 'docker.svg' },
		{ name: 'AWS', level: 72, icon: 'aws.svg' },
		{ name: 'Git', level: 91, icon: 'git.svg' },
		{ name: 'Jira', level: 70, icon: 'jira.svg' },
		{ name: 'ChatGPT', level: 84, icon: 'openai.svg' }
	];

	const skillGroups = [
		{ label: m.skills_backend(), skills: backendSkills, color: '#10b981' },
		{ label: m.skills_frontend(), skills: frontendSkills, color: 'var(--accent)' },
		{ label: m.skills_tools(), skills: toolSkills, color: '#f59e0b' }
	];

	const badges = [
		'Node.js',
		'TypeScript',
		'Express',
		'NestJS',
		'PostgreSQL',
		'MongoDB',
		'Redis',
		'GraphQL',
		'REST Api',
		'React',
		'Next.js',
		'Tailwind',
		'SvelteKit',
		'Docker',
		'AWS',
		'Git',
		'Jira',
		'ChatGPT'
	];

	let animated = $state(false);

	function onVisible(node: HTMLElement) {
		const obs = new IntersectionObserver(
			(entries) => {
				if (entries[0].isIntersecting) {
					animated = true;
					obs.disconnect();
				}
			},
			{ threshold: 0.1 }
		);
		obs.observe(node);
		return { destroy: () => obs.disconnect() };
	}
</script>

<section id="skills" class="section">
	<div class="container">
		<div use:animate={{ type: 'fade' }}>
			<div class="section-label">Skills</div>
			<h2 class="section-title">{m.skills_title()}</h2>
			<p class="section-subtitle">{m.skills_subtitle()}</p>
		</div>

		<div class="skills-grid" use:onVisible>
			{#each skillGroups as group, gi (group.label)}
				<div class="skill-group" use:animate={{ type: 'slide-up', delay: gi * 100 }}>
					<h3 class="group-title" style="color: {group.color}">{group.label}</h3>
					<div class="skill-list">
						{#each group.skills as skill, i (skill)}
							<div class="skill-item">
								<div class="skill-header">
									<span class="skill-icon"
										><img height="20" width="20" src={skill.icon} alt="" /></span
									>
									<span class="skill-name">{skill.name}</span>
									<span class="skill-pct">{skill.level}%</span>
								</div>
								<div class="bar-track">
									<div
										class="bar-fill"
										style="
                      width: {animated ? skill.level : 0}%;
                      background: {group.color};
                      transition-delay: {animated ? gi * 200 + i * 80 : 0}ms;
                    "
									></div>
								</div>
							</div>
						{/each}
					</div>
				</div>
			{/each}
		</div>

		<div class="badges-row" use:animate={{ type: 'slide-up', delay: 200 }}>
			{#each badges as tech (tech)}
				<span class="tech-badge">{tech}</span>
			{/each}
		</div>
	</div>
</section>

<style>
	.skills-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
		gap: 2rem;
		margin-bottom: 3rem;
	}
	.skill-group {
		background: var(--surface);
		border: 1px solid var(--border);
		border-radius: 16px;
		padding: 1.75rem;
	}
	.group-title {
		font-size: 0.8rem;
		font-weight: 700;
		letter-spacing: 0.1em;
		text-transform: uppercase;
		margin-bottom: 1.5rem;
	}
	.skill-list {
		display: flex;
		flex-direction: column;
		gap: 1.1rem;
	}
	.skill-item {
	}
	.skill-header {
		display: flex;
		align-items: center;
		gap: 0.5rem;
		margin-bottom: 0.5rem;
	}
	.skill-icon {
		font-size: 1rem;
	}
	.skill-name {
		font-size: 0.875rem;
		font-weight: 500;
		flex: 1;
	}
	.skill-pct {
		font-size: 0.8rem;
		color: var(--text-muted);
		font-family: 'JetBrains Mono', monospace;
	}
	.bar-track {
		height: 6px;
		background: var(--border);
		border-radius: 100px;
		overflow: hidden;
	}
	.bar-fill {
		height: 100%;
		border-radius: 100px;
		transition: width 1s cubic-bezier(0.4, 0, 0.2, 1);
	}
	.badges-row {
		display: flex;
		flex-wrap: wrap;
		gap: 0.6rem;
	}
	.tech-badge {
		background: var(--surface);
		border: 1px solid var(--border);
		color: var(--text-muted);
		font-size: 0.78rem;
		font-weight: 500;
		padding: 0.3rem 0.75rem;
		border-radius: 100px;
		font-family: 'JetBrains Mono', monospace;
		transition: all 0.2s;
	}
	.tech-badge:hover {
		color: var(--accent);
		border-color: var(--accent);
	}
</style>
