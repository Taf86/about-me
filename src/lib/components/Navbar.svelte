<script lang="ts">
  import { theme } from '$lib/stores/theme';
  import {getLocale, setLocale } from '$lib/paraglide/runtime';
  import { onMount } from 'svelte';

  let scrolled = false;
  let menuOpen = false;

  onMount(() => {
    const handler = () => { scrolled = window.scrollY > 20; };
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
</script>

<nav class:scrolled class:dark={$theme === 'dark'}>
  <div class="nav-inner">
    <div class="logo" on:click={() => scrollTo('hero')} on:keypress={() => scrollTo('hero')} role="button" tabindex="0">
      <span class="logo-bracket">&lt;</span>MR<span class="logo-bracket">/&gt;</span>
    </div>

    <div class="nav-links" class:open={menuOpen}>
      {#each [['hero', "about"], ['skills',"skills"], ['experience', "experience"], ['projects', "projects"], ['contact', "contact"]] as [id, label] (label)}
        <button class="nav-link" on:click={() => scrollTo(id)}>{label}</button>
      {/each}
      <button class="btn-download" on:click={downloadCV}>
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
          <polyline points="7 10 12 15 17 10"/>
          <line x1="12" y1="15" x2="12" y2="3"/>
        </svg>
        $t.nav.downloadCV
      </button>
    </div>

    <div class="nav-controls">
      <button class="ctrl-btn" on:click={() => setLocale(getLocale() === 'it'?"en":"it")} title="Switch language">
        <span class="lang-flag">{getLocale() === 'it' ? '🇮🇹' : '🇬🇧'}</span>
        <span class="lang-text">{getLocale() === 'it' ? 'EN' : 'IT'}</span>
      </button>
      <button class="ctrl-btn theme-btn" on:click={() => theme.toggle()} title="Toggle theme">
        {#if $theme === 'dark'}
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <circle cx="12" cy="12" r="5"/>
            <line x1="12" y1="1" x2="12" y2="3"/>
            <line x1="12" y1="21" x2="12" y2="23"/>
            <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
            <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
            <line x1="1" y1="12" x2="3" y2="12"/>
            <line x1="21" y1="12" x2="23" y2="12"/>
            <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
            <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
          </svg>
        {:else}
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
          </svg>
        {/if}
      </button>
      <button class="hamburger" on:click={() => menuOpen = !menuOpen} aria-label="Menu">
        <span class:open={menuOpen}></span>
        <span class:open={menuOpen}></span>
        <span class:open={menuOpen}></span>
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
  .logo-bracket { color: var(--accent); }
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
  .nav-link:hover { color: var(--text); background: var(--surface); }
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
  .btn-download:hover { background: var(--accent-hover); transform: translateY(-1px); }
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
  .ctrl-btn:hover { background: var(--surface-hover); }
  .lang-flag { font-size: 1rem; }
  .lang-text { display: none; }
  .hamburger {
    display: none;
    flex-direction: column;
    gap: 5px;
    background: none;
    border: none;
    cursor: pointer;
    padding: 4px;
  }
  .hamburger span {
    display: block;
    width: 22px;
    height: 2px;
    background: var(--text);
    border-radius: 2px;
    transition: all 0.3s;
  }
  .hamburger span.open:nth-child(1) { transform: translateY(7px) rotate(45deg); }
  .hamburger span.open:nth-child(2) { opacity: 0; }
  .hamburger span.open:nth-child(3) { transform: translateY(-7px) rotate(-45deg); }

  @media (max-width: 768px) {
    .hamburger { display: flex; }
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
    .nav-links.open { display: flex; }
    .nav-link { width: 100%; text-align: left; }
    .btn-download { width: 100%; justify-content: center; margin-left: 0; }
  }
</style>
