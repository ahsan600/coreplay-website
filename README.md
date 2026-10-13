# CorePlay Games — Official Studio Website

Official website for **CorePlay Games**, an independent mobile gaming studio creating fun, exciting, and immersive 3D simulation and adventure games for players worldwide on Google Play.

---

## 🎮 Highlights & Features

- **Studio Portfolio**: Showcases published mobile games including *Dubai Modern Bus Simulator*, high-resolution screenshot galleries, and gameplay details.
- **Modern Tech Stack**: Built with Next.js 16 (App Router), TypeScript, Tailwind CSS, and Lucide React.
- **Dynamic Theming**: Fluid Dark/Light theme switching with smooth transitions and persistent preference.
- **SEO & Metadata**: Complete OpenGraph, Twitter Cards, dynamic `sitemap.xml`, and `robots.txt` optimized for search discovery.
- **Player Support**: Interactive support helper for direct email inquiries with pre-formatted diagnostics.
- **Official Policy Links**: Seamless integration with the studio's official privacy policy.

---

## 🚀 Getting Started

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

## 🌐 Deploy to Netlify

This repository includes a pre-configured `netlify.toml` optimized for Next.js App Router on **[Netlify](https://www.netlify.com/)**:

### Option 1: Git Integration (Recommended)
1. Push your changes to GitHub / GitLab / Bitbucket.
2. Go to the [Netlify App](https://app.netlify.com/).
3. Click **Add new site** > **Import an existing project**.
4. Select your repository.
5. Netlify will automatically detect the settings from [netlify.toml](file:///d:/SAAS/Coreplay/netlify.toml):
   - **Build command**: `npm run build`
   - **Publish directory**: `.next`
   - **Node version**: `22`
   - **Plugin**: `@netlify/plugin-nextjs`
6. Click **Deploy coreplay-games**.

### Option 2: Netlify CLI
```bash
# Install Netlify CLI globally (if not already installed)
npm install -g netlify-cli

# Login and link project
netlify login
netlify link

# Deploy preview
netlify deploy --build

# Deploy to production
netlify deploy --build --prod
```

*(Optional Environment Variable)*:
- `NEXT_PUBLIC_SITE_URL`: Set to your custom production domain (e.g. `https://coreplay-games.netlify.app` or `https://coreplaygames.com`). Defaults to Netlify's `URL` environment variable if omitted.

---

## 🌐 Deploy to Vercel

This repository can also be deployed to **[Vercel](https://vercel.com/)**:

1. Push your changes to GitHub.
2. Go to [Vercel Dashboard](https://vercel.com/new).
3. Import the repository.
4. Framework Preset will automatically detect **Next.js**.
5. Click **Deploy**.

---

## 🔗 Official Links

- **Google Play Profile**: [CorePlay Games Developer Profile](https://play.google.com/store/apps/dev?id=6807992577867877190)
- **Privacy Policy**: [Official Privacy Policy](https://coreplay-privacy-site.netlify.app/)
- **Contact**: `coreplay.games@gmail.com`
