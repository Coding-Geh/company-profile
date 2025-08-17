<script>
	let formData = {
		name: '',
		email: '',
		company: '',
		message: ''
	};
	
	function handleSubmit() {
		// Handle form submission
		console.log('Form submitted:', formData);
		alert('Thank you for your message! We will get back to you soon.');
		
		// Reset form
		formData = {
			name: '',
			email: '',
			company: '',
			message: ''
		};
	}
</script>

<section id="contact" class="section-padding bg-gradient-primary dark:bg-gradient-to-br dark:from-secondary-800 dark:to-secondary-900">
	<div class="container-max">
		<div class="text-center mb-16">
			<h2 class="text-3xl sm:text-4xl font-bold text-secondary-900 dark:text-white mb-4">
				Get In Touch
			</h2>
			<p class="text-lg text-secondary-700 dark:text-secondary-300 max-w-3xl mx-auto">
				Ready to start your next project? Let's discuss how we can help your business grow.
			</p>
		</div>
		
		<div class="grid lg:grid-cols-2 gap-12">
			<!-- Contact Form -->
			<div class="card">
				<h3 class="text-2xl font-bold text-secondary-900 dark:text-white mb-6">
					Send us a message
				</h3>
				
				<form on:submit|preventDefault={handleSubmit} class="space-y-6">
					<div class="grid md:grid-cols-2 gap-6">
						<div>
							<label for="name" class="block text-sm font-medium text-secondary-700 dark:text-secondary-300 mb-2">
								Full Name *
							</label>
							<input
								type="text"
								id="name"
								bind:value={formData.name}
								required
								class="w-full px-4 py-3 border border-secondary-300 dark:border-secondary-600 dark:bg-secondary-800 dark:text-white rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors duration-200"
								placeholder="Your full name"
							/>
						</div>
						
						<div>
							<label for="email" class="block text-sm font-medium text-secondary-700 dark:text-secondary-300 mb-2">
								Email Address *
							</label>
							<input
								type="email"
								id="email"
								bind:value={formData.email}
								required
								class="w-full px-4 py-3 border border-secondary-300 dark:border-secondary-600 dark:bg-secondary-800 dark:text-white rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors duration-200"
								placeholder="your@email.com"
							/>
						</div>
					</div>
					
					<div>
						<label for="company" class="block text-sm font-medium text-secondary-700 dark:text-secondary-300 mb-2">
							Company
						</label>
						<input
							type="text"
							id="company"
							bind:value={formData.company}
							class="w-full px-4 py-3 border border-secondary-300 dark:border-secondary-600 dark:bg-secondary-800 dark:text-white rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors duration-200"
							placeholder="Your company name"
						/>
					</div>
					
					<div>
						<label for="message" class="block text-sm font-medium text-secondary-700 dark:text-secondary-300 mb-2">
							Message *
						</label>
						<textarea
							id="message"
							bind:value={formData.message}
							required
							rows="5"
							class="w-full px-4 py-3 border border-secondary-300 dark:border-secondary-600 dark:bg-secondary-800 dark:text-white rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors duration-200 resize-none"
							placeholder="Tell us about your project..."
						></textarea>
					</div>
					
					<button type="submit" class="btn-primary w-full text-lg py-4">
						Send Message
					</button>
				</form>
			</div>
			
			<!-- Contact Info -->
			<div class="space-y-8">
				<div>
					<h3 class="text-2xl font-bold text-secondary-900 dark:text-white mb-6">
						Contact Information
					</h3>
					<p class="text-secondary-700 dark:text-secondary-300 mb-8">
						We'd love to hear from you. Here's how you can reach us:
					</p>
				</div>
				
				<div class="space-y-6">
					<div class="flex items-start space-x-4">
						<div class="w-10 h-10 bg-primary-100 dark:bg-primary-900 rounded-lg flex items-center justify-center flex-shrink-0">
							<span class="text-primary-600 dark:text-primary-400 text-lg">📍</span>
						</div>
						<div>
							<h4 class="font-semibold text-secondary-900 dark:text-white mb-1">Office Address</h4>
							<p class="text-secondary-700 dark:text-secondary-300">
								123 Business Street<br>
								Suite 100<br>
								City, State 12345
							</p>
						</div>
					</div>
					
					<div class="flex items-start space-x-4">
						<div class="w-10 h-10 bg-primary-100 dark:bg-primary-900 rounded-lg flex items-center justify-center flex-shrink-0">
							<span class="text-primary-600 dark:text-primary-400 text-lg">📞</span>
						</div>
						<div>
							<h4 class="font-semibold text-secondary-900 dark:text-white mb-1">Phone</h4>
							<p class="text-secondary-700 dark:text-secondary-300">
								+1 (555) 123-4567<br>
								Mon-Fri 9AM-6PM EST
							</p>
						</div>
					</div>
					
					<div class="flex items-start space-x-4">
						<div class="w-10 h-10 bg-primary-100 dark:bg-primary-900 rounded-lg flex items-center justify-center flex-shrink-0">
							<span class="text-primary-600 dark:text-primary-400 text-lg">📧</span>
						</div>
												<div>
							<h4 class="font-semibold text-secondary-900 dark:text-white mb-1">Email</h4>
							<p class="text-secondary-700 dark:text-secondary-300">
								hello@codinggeh.com<br>
								support@codinggeh.com
							</p>
						</div>
					</div>
				</div>
				
				<div class="pt-6 border-t border-secondary-200 dark:border-secondary-700">
					<h4 class="font-semibold text-secondary-900 dark:text-white mb-4">Follow Us</h4>
					<div class="flex space-x-4">
						<a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" class="w-10 h-10 bg-primary-100 dark:bg-primary-900 rounded-lg flex items-center justify-center text-primary-600 dark:text-primary-400 hover:bg-primary-200 dark:hover:bg-primary-800 transition-colors duration-200" aria-label="LinkedIn">
							<span class="text-lg">💼</span>
						</a>
						<a href="https://twitter.com" target="_blank" rel="noopener noreferrer" class="w-10 h-10 bg-primary-100 dark:bg-primary-900 rounded-lg flex items-center justify-center text-primary-600 dark:text-primary-400 hover:bg-primary-200 dark:hover:bg-primary-800 transition-colors duration-200" aria-label="Twitter">
							<span class="text-lg">🐦</span>
						</a>
						<a href="https://facebook.com" target="_blank" rel="noopener noreferrer" class="w-10 h-10 bg-primary-100 dark:bg-primary-900 rounded-lg flex items-center justify-center text-primary-600 dark:text-primary-400 hover:bg-primary-200 dark:hover:bg-primary-800 transition-colors duration-200" aria-label="Facebook">
							<span class="text-lg">📘</span>
						</a>
						<a href="https://instagram.com" target="_blank" rel="noopener noreferrer" class="w-10 h-10 bg-primary-100 dark:bg-primary-900 rounded-lg flex items-center justify-center text-primary-600 dark:text-primary-400 hover:bg-primary-200 dark:hover:bg-primary-800 transition-colors duration-200" aria-label="Instagram">
							<span class="text-lg">📷</span>
						</a>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
