import { writable } from 'svelte/store';
import { browser } from '$app/environment';

// Theme types
export type Theme = 'light' | 'dark';

// Get initial theme from localStorage or system preference
function getInitialTheme(): Theme {
	if (browser) {
		const saved = localStorage.getItem('theme');
		if (saved === 'light' || saved === 'dark') {
			return saved;
		}
		
		// Check system preference
		if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
			return 'dark';
		}
	}
	return 'light';
}

// Create theme store
export const theme = writable<Theme>(getInitialTheme());

// Subscribe to theme changes and update localStorage
if (browser) {
	theme.subscribe((value) => {
		localStorage.setItem('theme', value);
		
		// Update document class
		if (value === 'dark') {
			document.documentElement.classList.add('dark');
		} else {
			document.documentElement.classList.remove('dark');
		}
	});
}

// Toggle theme function
export function toggleTheme() {
	theme.update(current => current === 'light' ? 'dark' : 'light');
}

// Set theme function
export function setTheme(newTheme: Theme) {
	theme.set(newTheme);
}
