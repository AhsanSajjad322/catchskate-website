# Catch Skate — Website

A simple, single-page React (Vite) website for the Catch Skate app: app intro, how-it-works,
how-to videos, safety notice, download links, social handles/contact, plus Terms of Use and
Privacy Policy pages. No backend or database — all editable content lives in `src/data.js`.

## Run it locally

```bash
npm i
npm run dev
```

Then open the URL it prints (usually `http://localhost:5173`).

## Edit the content

Open **`src/data.js`**. That's the only file you need to touch for day-to-day updates:

- `videos` — the 3 how-to videos (just paste a `youtu.be` or `youtube.com` link)
- `socials` — Instagram / TikTok / YouTube handles + links
- `contact` — email, phone, address
- `appLinks` — App Store / Google Play links (flip `available: true` once your listing is live)

> One thing to finish: the **"SKATE — Detailed Instructions"** video in `src/data.js`
> currently reuses the intro video link as a placeholder — swap in the real link once you have it.

The Terms of Use and Privacy Policy pages are plain HTML files in `public/terms.html` and
`public/privacy.html` — edit those directly (they still have `[DATE]` / `[YOUR STATE]` style
placeholders your client flagged for a lawyer to fill in).

## Build for production

```bash
npm run build
npm run preview   # optional local preview of the production build
```

## Deploy to Vercel

1. Push this folder to a GitHub repo.
2. Go to [vercel.com](https://vercel.com) → **Add New Project** → import that repo.
3. Vercel auto-detects Vite — leave the defaults (Build Command: `vite build`, Output: `dist`) and click **Deploy**.

That's it — no environment variables, no database setup required.

## Project structure

```
├── public/
│   ├── logo.png          # app icon / logo
│   ├── terms.html        # Terms of Use (static page)
│   └── privacy.html      # Privacy Policy (static page)
├── src/
│   ├── components/       # Header, Hero, HowItWorks, Videos, Safety, Download, Contact, Footer
│   ├── pages/
│   │   └── NotFound.jsx
│   ├── data.js            # ← edit content here
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── vercel.json
└── package.json
```
