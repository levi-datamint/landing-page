# Conference Landing Page (React + GitHub Pages)

Simple conference landing page with application submission via an external application URL.

## Tech Stack
- Frontend: React (Vite)
- Styling: TailwindCSS
- Routing: React Router `HashRouter` (GitHub Pages compatible)
- Hosting: GitHub Pages (static)

## Features
- Public visitors see the conference landing page
- The landing page “Apply” CTA redirects to your external application URL
- Applications are managed by your external application page

## Prerequisites
- Node.js 18+

## 1) Local development

1. Install and run:

```bash
pnpm install
pnpm dev
```

## 2) Build & deploy to GitHub Pages

1. Build:
```bash
pnpm build
```

2. Deploy (publishes the `dist/` folder via `gh-pages`):
```bash
pnpm deploy
```

`gh-pages` uses `git` under the hood, so make sure you have a working git remote in your local repo (for example, `origin` pointing to GitHub) before running `pnpm deploy`.

## Project structure
- `src/pages/Landing.tsx` - landing page with full-screen sections and external application CTA

