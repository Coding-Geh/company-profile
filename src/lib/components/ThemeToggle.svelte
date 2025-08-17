<script lang="ts">
	import { theme, toggleTheme } from '$lib/stores/theme';
	import { browser } from '$app/environment';
	
	let mounted = false;
	
	// Only render after mount to avoid hydration issues
	$: if (browser) {
		mounted = true;
	}
</script>

{#if mounted}
	<button
		on:click={toggleTheme}
		class="relative inline-flex h-10 w-20 items-center rounded-full bg-secondary-200 dark:bg-secondary-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 dark:focus:ring-offset-secondary-900"
		aria-label="Toggle theme"
	>
		<!-- Sun icon -->
		<div class="absolute left-1 flex h-8 w-8 items-center justify-center rounded-full bg-white shadow-md transition-transform duration-200 {$theme === 'dark' ? 'translate-x-10' : 'translate-x-0'}">
			<svg class="h-5 w-5 text-yellow-500" fill="currentColor" viewBox="0 0 24 24">
				<path d="M12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9M12,2L14.39,5.42C13.65,5.15 12.84,5 12,5C11.16,5 10.35,5.15 9.61,5.42L12,2M3.34,7L7.5,6.65C6.9,7.16 6.36,7.78 5.94,8.5C5.5,9.24 5.25,10 5.11,10.79L3.34,7M3.36,17L5.12,13.23C5.26,14 5.53,14.78 5.95,15.5C6.37,16.24 6.91,16.86 7.5,17.37L3.36,17M20.65,7L18.88,10.79C18.74,10 18.47,9.23 18.05,8.5C17.63,7.78 17.1,7.15 16.5,6.64L20.65,7M20.64,17L16.5,17.36C17.09,16.85 17.62,16.22 18.04,15.5C18.46,14.77 18.73,14 18.87,13.21L20.64,17M12,22L9.59,18.56C10.33,18.83 11.14,19 12,19C12.82,19 13.63,18.83 14.37,18.56L12,22Z"/>
			</svg>
		</div>
		
		<!-- Moon icon (hidden) -->
		<div class="absolute right-1 flex h-8 w-8 items-center justify-center rounded-full bg-secondary-800 shadow-md transition-transform duration-200 {$theme === 'dark' ? 'translate-x-0' : '-translate-x-10'}">
			<svg class="h-5 w-5 text-gray-300" fill="currentColor" viewBox="0 0 24 24">
				<path d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4M12,6A6,6 0 0,0 6,12A6,6 0 0,0 12,18A6,6 0 0,0 18,12A6,6 0 0,0 12,6M12,8A4,4 0 0,1 16,12A4,4 0 0,1 12,16A4,4 0 0,1 8,12A4,4 0 0,1 12,8Z"/>
			</svg>
		</div>
	</button>
{/if}
