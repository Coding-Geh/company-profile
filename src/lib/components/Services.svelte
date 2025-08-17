<script>
	const services = [
		{
			icon: '💻',
			title: 'Web Development',
			description: 'Modern web applications built with React, Vue, Svelte, and cutting-edge technologies.',
			features: ['React/Vue/Svelte', 'TypeScript', 'Modern APIs', 'Performance Optimized']
		},
		{
			icon: '📱',
			title: 'Mobile Development',
			description: 'Cross-platform mobile apps with React Native, Flutter, and native development.',
			features: ['React Native', 'Flutter', 'iOS/Android', 'App Store Ready']
		},
		{
			icon: '⚡',
			title: 'Backend Development',
			description: 'Scalable backend systems with Node.js, Python, and cloud-native architectures.',
			features: ['Node.js/Python', 'REST APIs', 'Database Design', 'Cloud Deployment']
		},
		{
			icon: '🎨',
			title: 'UI/UX Design',
			description: 'Beautiful and intuitive user interfaces with modern design systems.',
			features: ['Figma/Sketch', 'Design Systems', 'User Research', 'Prototyping']
		},
		{
			icon: '🚀',
			title: 'DevOps & Cloud',
			description: 'CI/CD pipelines, cloud infrastructure, and deployment automation.',
			features: ['AWS/Azure/GCP', 'Docker/Kubernetes', 'CI/CD', 'Monitoring']
		},
		{
			icon: '🔧',
			title: 'Code Consulting',
			description: 'Technical consulting, code reviews, and architecture guidance.',
			features: ['Code Reviews', 'Architecture', 'Best Practices', 'Performance']
		}
	];
</script>

<section id="services" class="section-padding bg-gradient-secondary">
	<div class="container-max">
		<div class="text-center mb-16">
			<h2 class="text-3xl sm:text-4xl font-bold text-secondary-900 mb-4">
				Our Services
			</h2>
			<p class="text-lg text-secondary-700 max-w-3xl mx-auto">
				CodingGeh offers a comprehensive range of development and design services to help your business succeed in the digital world.
			</p>
		</div>
		
		<div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
			{#each services as service, index}
				<div class="card hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 animate-slide-up" style="animation-delay: {index * 0.1}s;">
					<div class="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-6">
						<span class="text-2xl">{service.icon}</span>
					</div>
					
					<h3 class="text-xl font-bold text-secondary-900 mb-4">
						{service.title}
					</h3>
					
					<p class="text-secondary-700 mb-6">
						{service.description}
					</p>
					
					<ul class="space-y-2">
						{#each service.features as feature}
							<li class="flex items-center text-sm text-secondary-600">
								<span class="text-primary-600 mr-2">✓</span>
								{feature}
							</li>
						{/each}
					</ul>
				</div>
			{/each}
		</div>
		
		<div class="text-center mt-12">
			<a href="#contact" class="btn-primary text-lg px-8 py-4">
				Get a Free Consultation
			</a>
		</div>
	</div>
</section>
