<script>
	import { _ } from 'svelte-i18n';
</script>

<section id="about" class="section-padding bg-white dark:bg-secondary-900">
	<div class="container-max">
		<div class="text-center mb-16">
			<h2 class="text-3xl sm:text-4xl font-bold text-secondary-900 dark:text-white mb-4">
				{_('about.title')}
			</h2>
			<p class="text-lg text-secondary-700 dark:text-secondary-300 max-w-3xl mx-auto">
				{_('about.description')}
			</p>
		</div>
		
		<div class="grid lg:grid-cols-2 gap-12 items-center">
			<!-- Content -->
			<div>
				<h3 class="text-2xl font-bold text-secondary-900 mb-6">
					Our Mission & Vision
				</h3>
				<p class="text-secondary-700 mb-6">
					Our mission is to empower developers and businesses with cutting-edge coding solutions, 
					modern development practices, and innovative technologies that drive digital transformation.
				</p>
				<p class="text-secondary-700 mb-8">
					We envision a world where every developer has access to the best tools, resources, 
					and expertise needed to create amazing digital experiences and build successful products.
				</p>
				
				<!-- Values -->
				<div class="space-y-4">
					<div class="flex items-start space-x-4">
						<div class="w-8 h-8 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
							<span class="text-primary-600 text-lg">💡</span>
						</div>
						<div>
							<h4 class="font-semibold text-secondary-900 mb-1">Innovation</h4>
							<p class="text-sm text-secondary-600">Constantly pushing boundaries and exploring new possibilities</p>
						</div>
					</div>
					
					<div class="flex items-start space-x-4">
						<div class="w-8 h-8 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
							<span class="text-primary-600 text-lg">🤝</span>
						</div>
						<div>
							<h4 class="font-semibold text-secondary-900 mb-1">Integrity</h4>
							<p class="text-sm text-secondary-600">Building trust through honest, transparent relationships</p>
						</div>
					</div>
					
					<div class="flex items-start space-x-4">
						<div class="w-8 h-8 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
							<span class="text-primary-600 text-lg">🎯</span>
						</div>
						<div>
							<h4 class="font-semibold text-secondary-900 mb-1">Excellence</h4>
							<p class="text-sm text-secondary-600">Delivering outstanding results that exceed expectations</p>
						</div>
					</div>
				</div>
			</div>
			
			<!-- Image/Stats -->
			<div class="relative">
				<div class="bg-gradient-secondary rounded-2xl p-8">
					<div class="grid grid-cols-2 gap-6">
						<div class="text-center">
							<div class="text-3xl font-bold text-primary-600 mb-2">15+</div>
							<div class="text-sm text-secondary-600">Team Members</div>
						</div>
						<div class="text-center">
							<div class="text-3xl font-bold text-primary-600 mb-2">50+</div>
							<div class="text-sm text-secondary-600">Industries Served</div>
						</div>
						<div class="text-center">
							<div class="text-3xl font-bold text-primary-600 mb-2">99%</div>
							<div class="text-sm text-secondary-600">Client Satisfaction</div>
						</div>
						<div class="text-center">
							<div class="text-3xl font-bold text-primary-600 mb-2">24/7</div>
							<div class="text-sm text-secondary-600">Support Available</div>
						</div>
					</div>
				</div>
				
				<!-- Floating Elements -->
				<div class="absolute -top-4 -left-4 w-16 h-16 bg-primary-200 rounded-full opacity-50 animate-pulse"></div>
				<div class="absolute -bottom-4 -right-4 w-20 h-20 bg-secondary-200 rounded-full opacity-50 animate-pulse" style="animation-delay: 1s;"></div>
			</div>
		</div>
	</div>
</section>
