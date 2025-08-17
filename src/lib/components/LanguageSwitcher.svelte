<script lang="ts">
	import { locale } from 'svelte-i18n';
	import { browser } from '$app/environment';
	
	let mounted = false;
	
	// Only render after mount to avoid hydration issues
	$: if (browser) {
		mounted = true;
	}
	
	function switchLanguage(lang: string) {
		locale.set(lang);
	}
</script>

{#if mounted}
	<div class="relative inline-block text-left">
		<button
			on:click={() => document.getElementById('language-menu')?.classList.toggle('hidden')}
			class="inline-flex items-center justify-center w-full px-4 py-2 text-sm font-medium text-secondary-700 dark:text-secondary-300 bg-white dark:bg-secondary-800 border border-secondary-300 dark:border-secondary-600 rounded-lg shadow-sm hover:bg-secondary-50 dark:hover:bg-secondary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 dark:focus:ring-offset-secondary-900 transition-colors duration-200"
		>
			{#if $locale === 'en'}
				🇺🇸 English
			{:else if $locale === 'id'}
				🇮🇩 Indonesia
			{/if}
			<svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
				<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
			</svg>
		</button>
		
		<div
			id="language-menu"
			class="absolute right-0 z-10 w-40 mt-2 origin-top-right bg-white dark:bg-secondary-800 border border-secondary-300 dark:border-secondary-600 rounded-lg shadow-lg hidden"
		>
			<div class="py-1">
				<button
					on:click={() => { switchLanguage('en'); document.getElementById('language-menu')?.classList.add('hidden'); }}
					class="block w-full px-4 py-2 text-sm text-secondary-700 dark:text-secondary-300 hover:bg-secondary-100 dark:hover:bg-secondary-700 text-left transition-colors duration-200"
				>
					🇺🇸 English
				</button>
				<button
					on:click={() => { switchLanguage('id'); document.getElementById('language-menu')?.classList.add('hidden'); }}
					class="block w-full px-4 py-2 text-sm text-secondary-700 dark:text-secondary-300 hover:bg-secondary-100 dark:hover:bg-secondary-700 text-left transition-colors duration-200"
				>
					🇮🇩 Indonesia
				</button>
			</div>
		</div>
	</div>
{/if}

<!-- Close menu when clicking outside -->
{#if mounted}
	<script>
		import { onMount } from 'svelte';
		
		onMount(() => {
			function handleClickOutside(event: MouseEvent) {
				const menu = document.getElementById('language-menu');
				const button = event.target as HTMLElement;
				
				if (menu && !menu.contains(button) && !button.closest('button')) {
					menu.classList.add('hidden');
				}
			}
			
			document.addEventListener('click', handleClickOutside);
			
			return () => {
				document.removeEventListener('click', handleClickOutside);
			};
		});
	</script>
{/if}
