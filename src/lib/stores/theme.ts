import { writable } from 'svelte/store';
import { browser } from '$app/environment';

function createTheme() {
  const defaultTheme =
    browser && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  const stored = browser ? localStorage.getItem('theme') : null;
  const initial = (stored as 'dark' | 'light') || defaultTheme;

  const { subscribe, set, update } = writable<'dark' | 'light'>(initial);

  return {
    subscribe,
    toggle: () =>
      update((t) => {
        const next = t === 'dark' ? 'light' : 'dark';
        if (browser) localStorage.setItem('theme', next);
        return next;
      }),
    set: (val: 'dark' | 'light') => {
      if (browser) localStorage.setItem('theme', val);
      set(val);
    }
  };
}

export const theme = createTheme();
