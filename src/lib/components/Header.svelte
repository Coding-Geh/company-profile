<script>
	import ThemeToggle from './ThemeToggle.svelte';
	import LanguageSwitcher from './LanguageSwitcher.svelte';
	import { theme, toggleTheme } from '$lib/stores/theme';
	import { locale } from 'svelte-i18n';
	
	let isMenuOpen = false;
	
	function toggleMenu() {
		isMenuOpen = !isMenuOpen;
	}
	
	function closeMenu() {
		isMenuOpen = false;
	}
	
	function switchLanguage(lang) {
		locale.set(lang);
	}
	
	// Close mobile language menu when clicking outside
	function handleClickOutside(event) {
		const menu = document.getElementById('mobile-language-menu');
		const button = event.target;
		
		if (menu && !menu.contains(button) && !button.closest('button')) {
			menu.classList.add('hidden');
		}
	}
	
	// Add event listener when component mounts
	import { onMount } from 'svelte';
	
	onMount(() => {
		document.addEventListener('click', handleClickOutside);
		
		return () => {
			document.removeEventListener('click', handleClickOutside);
		};
	});
</script>

<header class="fixed top-0 left-0 right-0 z-50 bg-white/95 dark:bg-secondary-900/95 backdrop-blur-md border-b border-secondary-200 dark:border-secondary-700">
	<div class="container-max">
		<div class="flex items-center justify-between h-16 px-4 sm:px-6 lg:px-8">
			<!-- Logo -->
			<a href="/" class="flex items-center space-x-2">
				<div class="w-8 h-8 bg-primary-600 rounded-lg flex items-center justify-center">
					<svg class="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
						<path d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4M12,6A6,6 0 0,0 6,12A6,6 0 0,0 12,18A6,6 0 0,0 18,12A6,6 0 0,0 12,6M12,8A4,4 0 0,1 16,12A4,4 0 0,1 12,16A4,4 0 0,1 8,12A4,4 0 0,1 12,8Z"/>
					</svg>
				</div>
				<span class="text-xl font-bold text-secondary-900 dark:text-white">CodingGeh</span>
			</a>
			
			<!-- Desktop Navigation -->
			<nav class="hidden md:flex items-center space-x-8">
				<a href="#home" class="text-secondary-700 dark:text-secondary-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200">Home</a>
				<a href="#about" class="text-secondary-700 dark:text-secondary-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200">About</a>
				<a href="#services" class="text-secondary-700 dark:text-secondary-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200">Services</a>
				<a href="#team" class="text-secondary-700 dark:text-secondary-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200">Team</a>
				<a href="#contact" class="text-secondary-700 dark:text-secondary-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200">Contact</a>
			</nav>
			
			<!-- Desktop Actions -->
			<div class="hidden md:flex items-center space-x-4">
				<LanguageSwitcher />
				<ThemeToggle />
				<a href="#contact" class="btn-primary">Get Started</a>
			</div>
			
			<!-- Mobile Menu Button -->
			<button 
				on:click={toggleMenu}
				class="md:hidden p-2 rounded-lg text-secondary-700 dark:text-secondary-300 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-secondary-100 dark:hover:bg-secondary-800 transition-colors duration-200"
				aria-label="Toggle menu"
			>
				{#if isMenuOpen}
					<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
					</svg>
				{:else}
					<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
					</svg>
				{/if}
			</button>
		</div>
		
		<!-- Mobile Navigation -->
		{#if isMenuOpen}
			<div class="md:hidden border-t border-secondary-200 dark:border-secondary-700 bg-white dark:bg-secondary-900">
				<nav class="px-4 py-4 space-y-4">
					<a href="#home" on:click={closeMenu} class="block text-secondary-700 dark:text-secondary-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200">Home</a>
					<a href="#about" on:click={closeMenu} class="block text-secondary-700 dark:text-secondary-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200">About</a>
					<a href="#services" on:click={closeMenu} class="block text-secondary-700 dark:text-secondary-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200">Services</a>
					<a href="#team" on:click={closeMenu} class="block text-secondary-700 dark:text-secondary-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200">Team</a>
					<a href="#contact" on:click={closeMenu} class="block text-secondary-700 dark:text-secondary-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200">Contact</a>
					<div class="pt-4 space-y-4">
						<div class="flex justify-center space-x-6">
							<!-- Mobile Language Switcher -->
							<div class="relative">
								<button
									on:click={() => document.getElementById('mobile-language-menu')?.classList.toggle('hidden')}
									class="inline-flex items-center justify-center px-3 py-2 text-sm font-medium text-secondary-700 dark:text-secondary-300 bg-secondary-100 dark:bg-secondary-800 border border-secondary-300 dark:border-secondary-600 rounded-lg hover:bg-secondary-200 dark:hover:bg-secondary-700 transition-colors duration-200"
								>
									{#if $locale === 'en'}
										🇺🇸 EN
									{:else if $locale === 'id'}
										🇮🇩 ID
									{:else}
										🌐 EN
									{/if}
								</button>
								<div
									id="mobile-language-menu"
									class="absolute left-0 z-10 w-32 mt-2 origin-top-left bg-white dark:bg-secondary-800 border border-secondary-300 dark:border-secondary-600 rounded-lg shadow-lg hidden"
								>
									<div class="py-1">
										<button
											on:click={() => { switchLanguage('en'); document.getElementById('mobile-language-menu')?.classList.add('hidden'); }}
											class="block w-full px-3 py-2 text-sm text-secondary-700 dark:text-secondary-300 hover:bg-secondary-100 dark:hover:bg-secondary-700 text-left transition-colors duration-200"
										>
											🇺🇸 English
										</button>
										<button
											on:click={() => { switchLanguage('id'); document.getElementById('mobile-language-menu')?.classList.add('hidden'); }}
											class="block w-full px-3 py-2 text-sm text-secondary-700 dark:text-secondary-300 hover:bg-secondary-100 dark:hover:bg-secondary-700 text-left transition-colors duration-200"
										>
											🇮🇩 Indonesia
										</button>
									</div>
								</div>
							</div>
							
							<!-- Mobile Theme Toggle -->
							<button
								on:click={toggleTheme}
								class="relative inline-flex h-8 w-16 items-center rounded-full bg-secondary-200 dark:bg-secondary-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 dark:focus:ring-offset-secondary-900"
								aria-label="Toggle theme"
							>
								<!-- Sun icon -->
								<div class="absolute left-0.5 flex h-6 w-6 items-center justify-center rounded-full bg-white shadow-md transition-transform duration-200 {$theme === 'dark' ? 'translate-x-8' : 'translate-x-0'}">
									<svg class="h-4 w-4 text-yellow-500" fill="currentColor" viewBox="0 0 24 24">
										<path d="M12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9M12,2L14.39,5.42C13.65,5.15 12.84,5 12,5C11.16,5 10.35,5.15 9.61,5.42L12,2M3.34,7L7.5,6.65C6.9,7.16 6.36,7.78 5.94,8.5C5.5,9.24 5.25,10 5.11,10.79L3.34,7M3.36,17L5.12,13.23C5.26,14 5.53,14.78 5.95,15.5C6.37,16.24 6.91,16.86 7.5,17.37L3.36,17M20.65,7L18.88,10.79C18.74,10 18.47,9.23 18.05,8.5C17.63,7.78 17.1,7.15 16.5,6.64L20.65,7M20.64,17L16.5,17.36C17.09,16.85 17.62,16.22 18.04,15.5C18.46,14.77 18.73,14 18.87,13.21L20.64,17M12,22L9.59,18.56C10.33,18.83 11.14,19 12,19C12.82,19 13.63,18.83 14.37,18.56L12,22Z"/>
									</svg>
								</div>
								
								<!-- Moon icon (hidden) -->
								<div class="absolute right-0.5 flex h-6 w-6 items-center justify-center rounded-full bg-secondary-800 shadow-md transition-transform duration-200 {$theme === 'dark' ? 'translate-x-0' : '-translate-x-8'}">
									<svg class="h-4 w-4 text-gray-300" fill="currentColor" viewBox="0 0 24 24">
										<path d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4M12,6A6,6 0 0,0 6,12A6,6 0 0,0 12,18A6,6 0 0,0 18,12A6,6 0 0,0 12,6M12,8A4,4 0 0,1 16,12A4,4 0 0,1 12,16A4,4 0 0,1 8,12A4,4 0 0,1 12,8Z"/>
									</svg>
								</div>
							</button>
						</div>
						<a href="#contact" on:click={closeMenu} class="btn-primary w-full text-center">Get Started</a>
					</div>
				</nav>
			</div>
		{/if}
	</div>
</header>

<!-- Spacer for fixed header -->
<div class="h-16"></div>
