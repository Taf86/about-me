<script lang="ts">
  import { animate } from '$lib/actions/animate';
</script>

<section id="contact" class="section">
  <div class="container">
    <div use:animate={{ type: 'fade' }}>
      <div class="section-label">Contact</div>
      <h2 class="section-title">$t.contact.title</h2>
      <p class="section-subtitle">$t.contact.subtitle</p>
    </div>

    <div class="contact-grid">
      <div class="contact-info" use:animate={{ type: 'slide-left', delay: 100 }}>
        <div class="info-cards">
          <a href="mailto:accdaca@gmail.com" class="info-card">
            <div class="info-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="22" height="22">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                <polyline points="22,6 12,13 2,6"/>
              </svg>
            </div>
            <div>
              <span class="info-label">$t.contact.email</span>
              <span class="info-value">accdaca@gmail.com</span>
            </div>
          </a>

          <div class="info-card">
            <div class="info-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="22" height="22">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                <circle cx="12" cy="10" r="3"/>
              </svg>
            </div>
            <div>
              <span class="info-label">$t.contact.location</span>
              <span class="info-value">$t.contact.locationValue</span>
            </div>
          </div>

          <div class="info-card available">
            <div class="info-icon green">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="22" height="22">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                <polyline points="22 4 12 14.01 9 11.01"/>
              </svg>
            </div>
            <div>
              <span class="info-value">$t.contact.available</span>
            </div>
          </div>
        </div>
      </div>

      <div class="contact-form-wrap" use:animate={{ type: 'slide-right', delay: 150 }}>
        <form class="contact-form" on:submit|preventDefault>
          <div class="form-row">
            <div class="form-group">
              <label for="name">Nome</label>
              <input id="name" type="text" placeholder="Il tuo nome" />
            </div>
            <div class="form-group">
              <label for="email">Email</label>
              <input id="email" type="email" placeholder="tua@email.com" />
            </div>
          </div>
          <div class="form-group">
            <label for="subject">Oggetto</label>
            <input id="subject" type="text" placeholder="Come posso aiutarti?" />
          </div>
          <div class="form-group">
            <label for="message">Messaggio</label>
            <textarea id="message" rows="5" placeholder="Descrivi il tuo progetto..."></textarea>
          </div>
          <button type="submit" class="btn-submit">
            $t.contact.sendMessage
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="16" height="16">
              <line x1="22" y1="2" x2="11" y2="13"/>
              <polygon points="22 2 15 22 11 13 2 9 22 2"/>
            </svg>
          </button>
        </form>
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
  .info-cards { display: flex; flex-direction: column; gap: 1rem; }
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
  .info-card:hover { border-color: var(--accent); transform: translateX(4px); }
  .info-card.available { border-color: rgba(34,197,94,0.3); }
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
  .info-icon.green { background: rgba(34,197,94,0.1); color: #22c55e; }
  .info-icon :global(svg) { color: inherit; }
  .info-label { display: block; font-size: 0.75rem; color: var(--text-muted); margin-bottom: 0.2rem; }
  .info-value { display: block; font-size: 0.9rem; font-weight: 500; }

  .contact-form {
    background: var(--surface);
    border: 1px solid var(--border);
    border-radius: 16px;
    padding: 2rem;
  }
  .form-row { display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; }
  .form-group { display: flex; flex-direction: column; gap: 0.4rem; margin-bottom: 1rem; }
  label { font-size: 0.8rem; font-weight: 600; color: var(--text-muted); }
  input, textarea {
    background: var(--bg);
    border: 1px solid var(--border);
    border-radius: 8px;
    padding: 0.7rem 1rem;
    color: var(--text);
    font-family: inherit;
    font-size: 0.9rem;
    transition: border-color 0.2s;
    resize: vertical;
    outline: none;
  }
  input:focus, textarea:focus { border-color: var(--accent); }
  input::placeholder, textarea::placeholder { color: var(--text-muted); }
  .btn-submit {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    width: 100%;
    background: var(--accent);
    color: white;
    border: none;
    padding: 0.85rem;
    border-radius: 8px;
    font-size: 0.95rem;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.2s;
    font-family: inherit;
    margin-top: 0.5rem;
  }
  .btn-submit:hover { background: var(--accent-hover); transform: translateY(-2px); box-shadow: 0 8px 24px rgba(99,102,241,0.35); }
  @media (max-width: 768px) {
    .contact-grid { grid-template-columns: 1fr; gap: 2rem; }
    .form-row { grid-template-columns: 1fr; }
  }
</style>
