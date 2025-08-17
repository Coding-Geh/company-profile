<script>
	import ThemeToggle from './ThemeToggle.svelte';
	
	let isMenuOpen = false;
	
	function toggleMenu() {
		isMenuOpen = !isMenuOpen;
	}
	
	function closeMenu() {
		isMenuOpen = false;
	}
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
						<div class="flex justify-center">
							<ThemeToggle />
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
