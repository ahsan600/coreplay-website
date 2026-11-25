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

## Privacy Policies

Every app's policy (`/privacy-policy/<url>`) and the universal policy (`/privacy-policy`) are generated from one template. The policy text is never written per app.

| File | What it holds |
| --- | --- |
| `src/data/projects.json` | Per-app data. **The only file to edit when you add or change an app.** |
| `src/data/policy/template.ts` | The shared policy text (AdMob, UMP, Firebase, Data safety, deletion, permissions, rights, contact…). |
| `src/data/policy/site.ts` | Developer name, contact email, "Last updated" date. |

**Add a new game**: append this to `projects.json`. Everything else (ads, Firebase, Data safety, offline play, on-device progress, deletion steps) comes from the template:

```json
{
  "name": "My Game: Subtitle",
  "url": "my-game",
  "packageName": "com.coreplay.my.game",
  "aliases": ["my-game-alias"],
  "category": "Puzzle Game",
  "summary": "a puzzle game"
}
```

Optional fields (see `ProjectEntry` in `template.ts`): `"type": "app"` for non-games, `crashlytics: true`, `features`, `storage`, `permissions` (e.g. camera, with `"sensitive": "camera"`), `services` (extra third-party SDKs) and `dataSafety` (extra "not collected" notes). When an app's SDKs or permissions change, update its entry and bump `lastUpdated` in `site.ts`.

**Play Console Data safety**: every app uses the same answers (approximate location, crash logs, diagnostics, app interactions, device IDs; collected and shared for analytics and advertising). The policy's "Google Play Data Safety" section mirrors them; if those answers ever change, update `DATA_SAFETY_TYPES` in `template.ts`. Use the app's policy URL (e.g. `https://coreplay-site.netlify.app/privacy-policy/count-master`) as both the privacy policy URL and the "Delete data URL"; the page has a "How to Delete Your Data" section.

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
- **Privacy Policy**: [Official Privacy Policy](https://coreplay-site.netlify.app/privacy-policy)
- **Contact**: `muhammadameen188d@gmail.com`
