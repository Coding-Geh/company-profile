# 🚀 Deployment Guide

Complete guide to deploy the CodingGeh Company Profile to various platforms.

## 🌐 Netlify (Recommended)

### Automatic Deployment

1. **Connect Repository**

   - Go to [Netlify](https://netlify.com)
   - Click "New site from Git"
   - Connect your GitHub account
   - Select `Coding-Geh/company-profile` repository
2. **Build Settings**

   - **Build command**: `npm run build`
   - **Publish directory**: `build`
   - **Node version**: `18` (auto-detected)
3. **Deploy**

   - Click "Deploy site"
   - Netlify will automatically build and deploy
   - Your site will be live at `https://your-site-name.netlify.app`

### Manual Deployment

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Login to Netlify
netlify login

# Initialize and deploy
netlify init
netlify deploy --prod
```

## ⚡ Vercel

### Automatic Deployment

1. **Import Project**

   - Go to [Vercel](https://vercel.com)
   - Click "New Project"
   - Import from GitHub: `Coding-Geh/company-profile`
2. **Framework Preset**

   - Framework: **SvelteKit**
   - Build Command: `npm run build`
   - Output Directory: `build`
3. **Deploy**

   - Click "Deploy"
   - Vercel will automatically deploy and provide a URL

### Manual Deployment

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel --prod
```

## 🐳 Docker

### Build Docker Image

```dockerfile
# Dockerfile
FROM node:18-alpine

WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production

COPY . .
RUN npm run build

EXPOSE 3000
CMD ["npm", "run", "preview"]
```

### Deploy with Docker

```bash
# Build image
docker build -t company-profile .

# Run container
docker run -p 3000:3000 company-profile
```

## 📦 Static Hosting

### Build for Static Hosting

```bash
# Build the project
npm run build

# The 'build' folder contains all static files
# Upload to any static hosting service:
# - GitHub Pages
# - Firebase Hosting
# - AWS S3
# - Cloudflare Pages
```

### GitHub Pages

1. **Enable GitHub Pages**

   - Go to repository Settings > Pages
   - Source: Deploy from a branch
   - Branch: `main`
   - Folder: `/docs` (create docs folder with build contents)
2. **Setup GitHub Actions**

```yaml
# .github/workflows/deploy.yml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
      - run: npm ci
      - run: npm run build
      - uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./build
```

## 🔧 Environment Variables

### Optional Configuration

```env
# Company settings
VITE_SITE_URL=https://codinggeh.com
VITE_CONTACT_EMAIL=hello@codinggeh.com

# App settings
VITE_APP_TITLE=CodingGeh Company Profile
VITE_APP_DESCRIPTION=Modern and professional company profile
```

### Netlify Environment Variables

1. Go to Site Settings > Environment Variables
2. Add variables as needed
3. Redeploy to apply changes

## 🚀 Performance Optimization

### Build Optimization

- **Tree Shaking**: Automatic with Vite
- **Code Splitting**: Automatic with SvelteKit
- **Asset Optimization**: Automatic compression
- **Caching**: Configured for optimal performance

### Performance Metrics

- **First Contentful Paint**: < 1.5s
- **Largest Contentful Paint**: < 2.5s
- **Cumulative Layout Shift**: < 0.1
- **Bundle Size**: < 500KB gzipped

## 🔒 Security Headers

### Configured Headers

```html
<!-- app.html -->
<meta http-equiv="X-Frame-Options" content="DENY">
<meta http-equiv="X-XSS-Protection" content="1; mode=block">
<meta http-equiv="X-Content-Type-Options" content="nosniff">
<meta http-equiv="Referrer-Policy" content="strict-origin-when-cross-origin">
```

## 📱 Responsive Design

### Mobile Optimization

- Mobile-first design approach
- Touch-friendly interactions
- Optimized for all screen sizes
- Fast loading on mobile networks

### Progressive Enhancement

- Works without JavaScript
- Graceful degradation
- Accessible design
- SEO optimized

## 🔍 SEO Optimization

### Meta Tags

- Dynamic title and description
- Open Graph tags
- Twitter Card support
- Structured data

### Sitemap

- Automatic sitemap generation
- Search engine optimization
- Social media sharing

## 📊 Analytics

### Google Analytics

```html
<!-- Add to app.html -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

### Netlify Analytics

- Built-in analytics with Netlify
- No additional setup required
- Privacy-focused analytics

## 🛠️ Troubleshooting

### Common Issues

#### Build Failures

```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
npm run build
```

#### Deployment Issues

- Check build logs in Netlify/Vercel
- Verify Node.js version (18+)
- Ensure all dependencies are installed

#### Performance Issues

- Check bundle size with `npm run build`
- Optimize images and assets
- Enable compression on hosting provider

### Support

- **GitHub Issues**: [Create Issue](https://github.com/Coding-Geh/company-profile/issues)
- **Netlify Support**: [Netlify Docs](https://docs.netlify.com)
- **Vercel Support**: [Vercel Docs](https://vercel.com/docs)

---

## 🎯 Quick Deploy

### One-Click Deploy

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/Coding-Geh/company-profile)

### Manual Steps

1. Fork the repository
2. Connect to Netlify
3. Deploy automatically
4. Customize domain (optional)

---

**Happy Deploying! 🚀**
