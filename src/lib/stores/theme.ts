import { writable } from 'svelte/store';

function createTheme() {
	const { subscribe } = writable<'dark' | 'light'>('light');

	return {
		subscribe
	};
}

export const theme = createTheme();
