<script lang="ts">
  import { animate } from '$lib/actions/animate';
</script>

<section id="experience" class="section">
  <div class="container">
    <div use:animate={{ type: 'fade' }}>
      <div class="section-label">Experience</div>
      <h2 class="section-title">$t.experience.title</h2>
      <p class="section-subtitle">$t.experience.subtitle</p>
    </div>

    <div class="timeline">
      {#each [
        {
          role: 'Senior Fullstack Developer',
          company: 'TechCorp S.r.l.',
          period: '2022 – Presente',
          description: 'Lead developer per applicazioni enterprise React/Node.js. Architettura microservizi, CI/CD pipeline, mentoring del team junior.',
          tags: ['React', 'Node.js', 'AWS', 'Docker']
        },
        {
          role: 'Fullstack Developer',
          company: 'StartupXYZ',
          period: '2020 – 2022',
          description: 'Sviluppo prodotto SaaS B2B con Vue.js e Laravel. Integrazione payment gateway, ottimizzazione performance DB.',
          tags: ['Vue.js', 'Laravel', 'PostgreSQL', 'Redis']
        },
        {
          role: 'Frontend Developer',
          company: 'Web Agency Italia',
          period: '2019 – 2020',
          description: 'Realizzazione siti e-commerce e landing page ad alte performance. Ottimizzazione SEO e Core Web Vitals.',
          tags: ['JavaScript', 'SCSS', 'WordPress', 'WooCommerce']
        }
      ] as job, i(job)}
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
    transition: transform 0.2s, border-color 0.2s;
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
  .tag-row { display: flex; flex-wrap: wrap; gap: 0.4rem; }
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
