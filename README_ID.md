# 🏢 CodingGeh Company Profile

Website **profil perusahaan modern, profesional, dan responsif** yang dibangun dengan **SvelteKit** dan **Tailwind CSS**. Menampilkan layanan pengembangan CodingGeh dengan desain elegan dan fitur yang powerful.

![SvelteKit](https://img.shields.io/badge/SvelteKit-FF3E00?style=for-the-badge&logo=svelte&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)

## ✨ Fitur

### 🎯 **Fitur Profil Perusahaan**
- **Hero Section Profesional**: Pengenalan menarik dengan tombol call-to-action
- **Bagian Tentang Kami**: Misi, visi, dan nilai-nilai perusahaan
- **Pameran Layanan**: Portfolio layanan pengembangan yang komprehensif
- **Bagian Tim**: Kenali tim pengembangan yang berbakat
- **Formulir Kontak**: Formulir kontak interaktif dengan validasi
- **Desain Responsif**: Tampilan sempurna di semua perangkat

### 🛠️ **Layanan Pengembangan**
- **Web Development**: Aplikasi React, Vue, Svelte, TypeScript
- **Mobile Development**: Aplikasi cross-platform React Native, Flutter
- **Backend Development**: Node.js, Python, REST APIs, database
- **UI/UX Design**: Figma, design systems, user research
- **DevOps & Cloud**: AWS, Docker, CI/CD, monitoring
- **Code Consulting**: Reviews, arsitektur, best practices

### 🎨 **Fitur UI/UX**
- **Desain Modern**: Antarmuka bersih dan profesional
- **Animasi Halus**: Transisi dan micro-interactions yang indah
- **Mode Gelap/Terang Siap**: Sistem tema yang dipersiapkan
- **Aksesibilitas**: Dukungan screen reader dan navigasi keyboard
- **Optimasi Performa**: Loading cepat dan interaksi halus

### 📱 **Fitur Responsif**
- **Mobile-First**: Dioptimalkan untuk perangkat mobile
- **Adaptif Tablet**: Layout sempurna di tablet
- **Desktop Enhanced**: Pengalaman full-featured di desktop
- **Touch Friendly**: Interaksi sentuh yang dioptimalkan

## 🚀 **Quick Start**

### Prasyarat
- Node.js 18+ 
- npm atau yarn

### Instalasi
```bash
# Clone repository
git clone https://github.com/Coding-Geh/company-profile.git
cd company-profile

# Install dependencies
npm install

# Jalankan development server
npm run dev

# Build untuk production
npm run build

# Preview build production
npm run preview
```

## 🌐 **Deployment**

### Netlify (Direkomendasikan)
1. Hubungkan repository GitHub ke Netlify
2. Set build command: `npm run build`
3. Set publish directory: `build`
4. Deploy otomatis saat push ke branch main

### Vercel
1. Import project dari GitHub
2. Framework preset: SvelteKit
3. Deploy otomatis

### Deployment Manual
```bash
npm run build
# Upload folder 'build' ke hosting provider
```

## 🛠️ **Tech Stack**

- **Framework**: [SvelteKit](https://kit.svelte.dev/) - Framework web full-stack
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) - Framework CSS utility-first
- **Bahasa**: [TypeScript](https://www.typescriptlang.org/) - JavaScript dengan type safety
- **Build Tool**: [Vite](https://vitejs.dev/) - Build tool dan dev server yang cepat
- **Static Site**: [@sveltejs/adapter-static](https://github.com/sveltejs/kit/tree/main/packages/adapter-static) - Static site generation

## 🎨 **Sistem Desain**

### Palet Warna
- **Primary**: Biru (#3B82F6) - Warna brand utama
- **Secondary**: Skala abu-abu (#F8FAFC ke #1E293B) - Warna pendukung
- **Accent**: Berbagai shade untuk section berbeda
- **Neutral**: Abu-abu bersih untuk teks dan background

### Tipografi
- **Font Utama**: Inter - Sans-serif modern dan bersih
- **Font Display**: Poppins - Untuk heading dan judul
- **Hierarki**: Skala tipografi Material Design 3
- **Responsif**: Skala yang sesuai di semua perangkat

### Komponen
- **Cards**: Card bersih dengan shadow halus
- **Buttons**: Styling konsisten dengan hover states
- **Forms**: Input form modern dengan validasi
- **Navigation**: Navigasi responsif dengan mobile menu

## 📱 **Desain Responsif**

- **Mobile**: Dioptimalkan untuk interaksi sentuh (320px+)
- **Tablet**: Layout adaptif dengan spacing yang diperbaiki (768px+)
- **Desktop**: Pengalaman full-featured (1024px+)
- **Large Screens**: Layout yang ditingkatkan untuk layar besar (1440px+)

## 🔧 **Konfigurasi**

### Environment Variables
```env
# Opsional: Kustomisasi pengaturan default
VITE_SITE_URL=https://codinggeh.com
VITE_CONTACT_EMAIL=hello@codinggeh.com
```

### Kustomisasi
- Modifikasi info perusahaan di file komponen
- Update warna di `src/app.css`
- Tambah section baru di `src/lib/components/`
- Kustomisasi animasi di `tailwind.config.js`

## 📁 **Struktur Project**

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

## 🤝 **Kontribusi**

1. Fork repository
2. Buat feature branch (`git checkout -b feature/fitur-menakjubkan`)
3. Commit perubahan (`git commit -m 'Tambah fitur menakjubkan'`)
4. Push ke branch (`git push origin feature/fitur-menakjubkan`)
5. Buka Pull Request

## 📄 **Lisensi**

Project ini dilisensikan di bawah MIT License - lihat file [LICENSE](LICENSE) untuk detail.

## 🙏 **Ucapan Terima Kasih**

- **Tim SvelteKit**: Framework dan dokumentasi yang luar biasa
- **Tailwind CSS**: Framework CSS utility-first yang indah
- **Emoji Avatars**: Avatar tim tanpa copyright
- **Komunitas Open Source**: Untuk inspirasi dan tools

## 📞 **Dukungan**

- **Issues**: [GitHub Issues](https://github.com/Coding-Geh/company-profile/issues)
- **Discussions**: [GitHub Discussions](https://github.com/Coding-Geh/company-profile/discussions)
- **Email**: hello@codinggeh.com

## 📸 **Screenshot**

![CodingGeh Company Profile](./screenshot/home.png)

---

## 🌟 **Demo Langsung**

Kunjungi website langsung: [CodingGeh Company Profile](https://codinggeh.netlify.app)

---

<div align="center">

**Building the Future of Coding! 🚀**

Dibuat dengan ❤️ oleh [CodingGeh](https://github.com/Coding-Geh)

[![GitHub stars](https://img.shields.io/github/stars/Coding-Geh/company-profile?style=social)](https://github.com/Coding-Geh/company-profile/stargazers)
[![GitHub forks](https://img.shields.io/github/forks/Coding-Geh/company-profile?style=social)](https://github.com/Coding-Geh/company-profile/network/members)

</div>
