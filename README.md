# Coreplay Technologies — Official Games & Apps Studio

Official website for **Coreplay Technologies**, an independent mobile studio publishing immersive 3D simulation games alongside smart, privacy-first utility applications on Google Play.

---

## Highlights & Features

- **Studio Portfolio**: Showcases published mobile games (including *Dubai Modern Bus Simulator*) and mobile utility tools (including *ScanPro – QR & Barcode Scanner*).
- **Privacy-by-Design Compliance**: Comprehensive official privacy policy detailing camera permissions, Google ML Kit on-device processing, AdMob monetization, and Google Play Data Safety standards.
- **Modern Tech Stack**: Built with Next.js 16 (App Router), TypeScript, Tailwind CSS, and Lucide React.
- **Dynamic Theming**: Fluid Dark/Light theme switching with smooth transitions and persistent preference.
- **SEO & Structured Metadata**: Complete OpenGraph, Twitter Cards, dynamic `sitemap.xml`, and `robots.txt` optimized for search discovery.
- **Player & User Support**: Interactive support helper for direct email inquiries with pre-formatted diagnostics for games and apps.

---

## Getting Started

### Prerequisites

- Node.js 18.17+ or 20+
- npm, yarn, or pnpm

### Installation

```bash
git clone https://github.com/ahsan600/coreplay-website.git
cd coreplay-website
npm install
```

### Local Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build

```bash
npm run build
npm run start
```

---

## Deploy to Netlify

This repository includes a pre-configured `netlify.toml` optimized for Next.js App Router on **[Netlify](https://www.netlify.com/)**:

### Option 1: Git Integration (Recommended)

1. Push your changes to GitHub / GitLab / Bitbucket.
2. Go to the [Netlify App](https://app.netlify.com/).
3. Click **Add new site** > **Import an existing project**.
4. Select your repository.
5. Netlify will automatically detect the settings from `netlify.toml`:
   - **Build command**: `npm run build`
   - **Publish directory**: `.next`
   - **Node version**: `22`
   - **Plugin**: `@netlify/plugin-nextjs`
6. Click **Deploy coreplay-games**.

---

## Official Links

- **Google Play Profile**: [Coreplay Technologies Developer Profile](https://play.google.com/store/apps/dev?id=6807992577867877190)
- **Privacy Policy**: [Official Privacy Policy](https://coreplay-privacy-site.netlify.app/privacy-policy)
- **Contact**: `muhammadameen188d@gmail.com`
