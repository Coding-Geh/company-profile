# 🏢 CodingGeh Company Profile

A **modern, professional, and responsive** company profile website built with **SvelteKit** and **Tailwind CSS**. Showcasing CodingGeh's development services with elegant design and powerful features.

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/Coding-Geh/company-profile)

![SvelteKit](https://img.shields.io/badge/SvelteKit-FF3E00?style=for-the-badge&logo=svelte&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)

## ✨ Features

### 🎯 **Company Profile Features**
- **Professional Hero Section**: Eye-catching introduction with call-to-action buttons
- **About Us Section**: Mission, vision, and company values
- **Services Showcase**: Comprehensive development services portfolio
- **Team Section**: Meet the talented development team
- **Contact Form**: Interactive contact form with validation
- **Responsive Design**: Perfect display on all devices

### 🛠️ **Development Services**
- **Web Development**: React, Vue, Svelte, TypeScript applications
- **Mobile Development**: React Native, Flutter cross-platform apps
- **Backend Development**: Node.js, Python, REST APIs, databases
- **UI/UX Design**: Figma, design systems, user research
- **DevOps & Cloud**: AWS, Docker, CI/CD, monitoring
- **Code Consulting**: Reviews, architecture, best practices

### 🎨 **UI/UX Features**
- **Modern Design**: Clean, professional interface
- **Smooth Animations**: Beautiful transitions and micro-interactions
- **Dark/Light Mode Ready**: Theme system prepared
- **Accessibility**: Screen reader support and keyboard navigation
- **Performance Optimized**: Fast loading and smooth interactions

### 📱 **Responsive Features**
- **Mobile-First**: Optimized for mobile devices
- **Tablet Adaptive**: Perfect layout on tablets
- **Desktop Enhanced**: Full-featured desktop experience
- **Touch Friendly**: Optimized touch interactions

## 🚀 **Quick Start**

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation
```bash
# Clone the repository
git clone https://github.com/Coding-Geh/company-profile.git
cd company-profile

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 🌐 **Deployment**

### Netlify (Recommended)
1. Connect your GitHub repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `build`
4. Deploy automatically on push to main branch

### Vercel
1. Import project from GitHub
2. Framework preset: SvelteKit
3. Deploy automatically

### Manual Deployment
```bash
npm run build
# Upload the 'build' folder to your hosting provider
```

## 🛠️ **Tech Stack**

- **Framework**: [SvelteKit](https://kit.svelte.dev/) - Full-stack web framework
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- **Language**: [TypeScript](https://www.typescriptlang.org/) - Type-safe JavaScript
- **Build Tool**: [Vite](https://vitejs.dev/) - Fast build tool and dev server
- **Static Site**: [@sveltejs/adapter-static](https://github.com/sveltejs/kit/tree/main/packages/adapter-static) - Static site generation

## 🎨 **Design System**

### Color Palette
- **Primary**: Blue (#3B82F6) - Main brand color
- **Secondary**: Gray scale (#F8FAFC to #1E293B) - Supporting colors
- **Accent**: Various shades for different sections
- **Neutral**: Clean grays for text and backgrounds

### Typography
- **Primary Font**: Inter - Clean, modern sans-serif
- **Display Font**: Poppins - For headings and titles
- **Hierarchy**: Material Design 3 typography scale
- **Responsive**: Scales appropriately on all devices

### Components
- **Cards**: Clean cards with subtle shadows
- **Buttons**: Consistent styling with hover states
- **Forms**: Modern form inputs with validation
- **Navigation**: Responsive navigation with mobile menu

## 📱 **Responsive Design**

- **Mobile**: Optimized for touch interactions (320px+)
- **Tablet**: Adaptive layout with improved spacing (768px+)
- **Desktop**: Full-featured experience (1024px+)
- **Large Screens**: Enhanced layout for large displays (1440px+)

## 🔧 **Configuration**

### Environment Variables
```env
# Optional: Customize default settings
VITE_SITE_URL=https://codinggeh.com
VITE_CONTACT_EMAIL=hello@codinggeh.com
```

### Customization
- Modify company info in component files
- Update colors in `src/app.css`
- Add new sections in `src/lib/components/`
- Customize animations in `tailwind.config.js`

## 📁 **Project Structure**

```
company-profile/
├── src/
│   ├── lib/
│   │   └── components/
│   │       ├── Header.svelte
│   │       ├── Hero.svelte
│   │       ├── About.svelte
│   │       ├── Services.svelte
│   │       ├── Team.svelte
│   │       ├── Contact.svelte
│   │       └── Footer.svelte
│   ├── routes/
│   │   └── +page.svelte
│   ├── app.html
│   ├── app.css
│   └── +layout.svelte
├── static/
├── package.json
├── svelte.config.js
├── tailwind.config.js
└── vite.config.js
```

## 🤝 **Contributing**

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 **License**

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 **Acknowledgments**

- **SvelteKit Team**: Amazing framework and documentation
- **Tailwind CSS**: Beautiful utility-first CSS framework
- **Emoji Avatars**: Copyright-free team avatars
- **Open Source Community**: For inspiration and tools

## 📞 **Support**

- **Issues**: [GitHub Issues](https://github.com/Coding-Geh/company-profile/issues)
- **Discussions**: [GitHub Discussions](https://github.com/Coding-Geh/company-profile/discussions)
- **Email**: hello@codinggeh.com

## 📸 **Screenshot**

![CodingGeh Company Profile](./screenshot/home.png)

---

## 🌟 **Live Demo**

Visit the live website: [CodingGeh Company Profile](https://codinggeh.netlify.app)

---

<div align="center">

**Building the Future of Coding! 🚀**

Made with ❤️ by [CodingGeh](https://github.com/Coding-Geh)

[![GitHub stars](https://img.shields.io/github/stars/Coding-Geh/company-profile?style=social)](https://github.com/Coding-Geh/company-profile/stargazers)
[![GitHub forks](https://img.shields.io/github/forks/Coding-Geh/company-profile?style=social)](https://github.com/Coding-Geh/company-profile/network/members)

</div>
