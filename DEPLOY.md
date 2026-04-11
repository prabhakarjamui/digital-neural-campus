# GoDaddy Deployment Guide — PNACADEMY EDTECH

## What changed

The build is now configured to output `index.html` directly at the **repository root**, with all assets in `/assets/`. This is exactly what GoDaddy needs.

After running `pnpm build` from `src/frontend/`, the structure is:

```
/ (repo root)
├── index.html          ← GoDaddy serves this
├── assets/
│   ├── index.js
│   ├── index.css
│   ├── pnalogo.png
│   ├── ceo-prabhakar.jpg
│   └── ... (fonts, images)
├── src/
└── ...
```

---

## Option 1: Deploy via GitHub + GoDaddy Git Integration

1. Push this entire repository to GitHub (your repo at `github.com/prabhakarjamui/digital-neural-campus`)
2. The GitHub Actions workflow (`.github/workflows/build.yml`) will automatically build the site on every push to `main` and commit the built `index.html` + `assets/` to the root
3. In GoDaddy cPanel → **Git Version Control** → connect your GitHub repo
4. Set the **deployment path** to `public_html`
5. GoDaddy will pull from the repo root and serve `index.html` directly

---

## Option 2: Manual Upload to GoDaddy

1. Run the build locally:
   ```bash
   cd src/frontend
   pnpm install
   pnpm vite build
   ```
2. After build, copy these files/folders to your GoDaddy `public_html`:
   - `index.html` (from repo root)
   - `assets/` folder (from repo root)
3. Upload via GoDaddy File Manager or FTP

---

## Option 3: GitHub Pages (free hosting)

If you want to use GitHub Pages instead of GoDaddy:

1. Go to your repo on GitHub → **Settings** → **Pages**
2. Set source to **Deploy from a branch** → `main` → `/ (root)`
3. Your site will be live at `https://prabhakarjamui.github.io/digital-neural-campus/`

---

## Contact Form on GoDaddy

Since GoDaddy can't connect to the Internet Computer backend, the contact form will automatically open your email client (`mailto:95prabhakar@gmail.com`) with all the form details pre-filled when someone submits.

For a proper form-to-email solution on GoDaddy, consider:
- **Formspree** (free tier available at formspree.io) — replace the form action with a Formspree endpoint
- **GoDaddy Email** — use the built-in GoDaddy PHP form (if on shared hosting with PHP)
