<script>
	import { _ } from 'svelte-i18n';
	
	const team = [
		{
			name: 'CodingGeh',
			position: 'Lead Developer & Founder',
			description: 'Passionate full-stack developer with expertise in React, Vue, Svelte, and modern web technologies.',
			avatar: '👨‍💻',
			social: {
				linkedin: 'https://linkedin.com/in/codinggeh',
				twitter: 'https://twitter.com/codinggeh',
				email: 'hello@codinggeh.com'
			}
		},
		{
			name: 'Tech Team',
			position: 'Senior Developers',
			description: 'Experienced developers specializing in frontend, backend, and mobile development.',
			avatar: '👥',
			social: {
				linkedin: 'https://linkedin.com/company/codinggeh',
				twitter: 'https://twitter.com/codinggeh',
				email: 'team@codinggeh.com'
			}
		},
		{
			name: 'Design Team',
			position: 'UI/UX Designers',
			description: 'Creative designers focused on creating beautiful and intuitive user experiences.',
			avatar: '🎨',
			social: {
				linkedin: 'https://linkedin.com/company/codinggeh',
				twitter: 'https://twitter.com/codinggeh',
				email: 'design@codinggeh.com'
			}
		},
		{
			name: 'DevOps Team',
			position: 'DevOps Engineers',
			description: 'Infrastructure experts ensuring smooth deployment and scalable cloud solutions.',
			avatar: '⚙️',
			social: {
				linkedin: 'https://linkedin.com/company/codinggeh',
				twitter: 'https://twitter.com/codinggeh',
				email: 'devops@codinggeh.com'
			}
		}
	];
</script>

<section id="team" class="section-padding bg-white dark:bg-secondary-900">
	<div class="container-max">
		<div class="text-center mb-16">
			<h2 class="text-3xl sm:text-4xl font-bold text-secondary-900 mb-4">
				Meet the CodingGeh Team
			</h2>
			<p class="text-lg text-secondary-700 max-w-3xl mx-auto">
				Our passionate team of developers, designers, and tech enthusiasts dedicated to creating amazing digital experiences.
			</p>
		</div>
		
		<div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
			{#each team as member, index}
				<div class="text-center animate-slide-up" style="animation-delay: {index * 0.1}s;">
					<div class="relative mb-6">
						<div class="w-32 h-32 rounded-full mx-auto bg-gradient-to-br from-primary-100 to-primary-200 flex items-center justify-center shadow-lg">
							<span class="text-4xl">{member.avatar}</span>
						</div>
						<div class="absolute inset-0 rounded-full bg-gradient-to-br from-primary-500/20 to-primary-600/20 opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
					</div>
					
					<h3 class="text-xl font-bold text-secondary-900 mb-2">
						{member.name}
					</h3>
					
					<p class="text-primary-600 font-medium mb-3">
						{member.position}
					</p>
					
					<p class="text-secondary-700 text-sm mb-4">
						{member.description}
					</p>
					
					<div class="flex justify-center space-x-3">
						<a href={member.social.linkedin} class="text-secondary-400 hover:text-primary-600 transition-colors duration-200">
							<span class="text-lg">💼</span>
						</a>
						<a href={member.social.twitter} class="text-secondary-400 hover:text-primary-600 transition-colors duration-200">
							<span class="text-lg">🐦</span>
						</a>
						<a href={`mailto:${member.social.email}`} class="text-secondary-400 hover:text-primary-600 transition-colors duration-200">
							<span class="text-lg">📧</span>
						</a>
					</div>
				</div>
			{/each}
		</div>
		
		<div class="text-center mt-12">
			<p class="text-secondary-700 mb-6">
				Join our growing team of professionals
			</p>
			<a href="#contact" class="btn-outline">
				View Open Positions
			</a>
		</div>
	</div>
</section>
