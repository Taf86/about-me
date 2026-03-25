<script lang="ts">
  import { animate } from '$lib/actions/animate';
</script>

<section id="projects" class="section section-alt">
  <div class="container">
    <div use:animate={{ type: 'fade' }}>
      <div class="section-label">Projects</div>
      <h2 class="section-title">$t.projects.title</h2>
      <p class="section-subtitle">$t.projects.subtitle</p>
    </div>

    <div class="projects-grid">
      {#each [
        {
          name: 'DevTrack',
          description: 'App di project management per sviluppatori con kanban board, time tracking e reportistica avanzata.',
          tags: ['SvelteKit', 'Supabase', 'TypeScript'],
          github: '#',
          demo: '#'
        },
        {
          name: 'OpenMetrics',
          description: 'Dashboard analytics open-source per monitoraggio infrastruttura cloud con grafici real-time.',
          tags: ['React', 'Go', 'InfluxDB', 'Grafana'],
          github: '#',
          demo: '#'
        },
        {
          name: 'ShopLite',
          description: 'Template e-commerce headless ultra-performante con Jamstack architecture e checkout ottimizzato.',
          tags: ['Next.js', 'Stripe', 'Sanity', 'Vercel'],
          github: '#',
          demo: '#'
        }
      ] as project, i(project)}
        <div class="project-card" use:animate={{ type: 'scale', delay: i * 100 }}>
          <div class="project-top">
            <div class="project-icon">
              {#if i === 0}📋{:else if i === 1}📊{:else}🛍️{/if}
            </div>
            <div class="project-links">
              <a target="_blank" rel="noreferrer" class="icon-link" title="GitHub">
                <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
                  <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z"/>
                </svg>
              </a>
              <a target="_blank" rel="noreferrer" class="icon-link" title="Live demo">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="18" height="18">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                  <polyline points="15 3 21 3 21 9"/>
                  <line x1="10" y1="14" x2="21" y2="3"/>
                </svg>
              </a>
            </div>
          </div>
          <h3 class="project-name">{project.name}</h3>
          <p class="project-desc">{project.description}</p>
          <div class="tag-row">
            {#each project.tags as tag (tag)}
              <span class="tag">{tag}</span>
            {/each}
          </div>
        </div>
      {/each}
    </div>
  </div>
</section>

<style>
  .projects-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 1.5rem;
  }
  .project-card {
    background: var(--surface);
    border: 1px solid var(--border);
    border-radius: 16px;
    padding: 1.75rem;
    transition: all 0.25s;
    display: flex;
    flex-direction: column;
  }
  .project-card:hover {
    transform: translateY(-5px);
    border-color: var(--accent);
    box-shadow: 0 16px 40px rgba(0,0,0,0.15);
  }
  .project-top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1.25rem;
  }
  .project-icon { font-size: 2rem; }
  .project-links { display: flex; gap: 0.5rem; }
  .icon-link {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 34px;
    height: 34px;
    background: var(--bg);
    border: 1px solid var(--border);
    border-radius: 7px;
    color: var(--text-muted);
    text-decoration: none;
    transition: all 0.2s;
  }
  .icon-link:hover { color: var(--accent); border-color: var(--accent); }
  .project-name {
    font-size: 1.2rem;
    font-weight: 700;
    margin-bottom: 0.6rem;
  }
  .project-desc {
    font-size: 0.875rem;
    color: var(--text-muted);
    line-height: 1.7;
    flex: 1;
    margin-bottom: 1.25rem;
  }
  .tag-row { display: flex; flex-wrap: wrap; gap: 0.4rem; }
  .tag {
    font-size: 0.72rem;
    font-weight: 500;
    background: var(--accent-bg);
    color: var(--accent);
    padding: 0.2rem 0.55rem;
    border-radius: 4px;
    font-family: 'JetBrains Mono', monospace;
  }
</style>
