# Laws of Cybersecurity

A static reference site cataloguing 50 established laws, models, and principles from cybersecurity, cryptography, digital forensics, and privacy law — in the style of lawsofsoftwareengineering.com. Fully static, no build step, no dependencies beyond a Google Fonts CDN link.

## What's inside

```
index.html           Main page — the 50 laws
about.html            About page — profile, career arc, case files
css/styles.css        All styling (dark "dossier" theme), shared by both pages
js/laws-data.js       The 50 law entries + 8 categories (edit to add/change content)
js/app.js             Search, filtering, and modal logic for index.html
js/about-data.js       Profile, career arc, case files, certifications, etc.
js/about-app.js        Rendering + modal logic for about.html
```

The About page reuses the same card/modal system as the laws grid — achievements are framed as filterable "case files" that open into a full Situation/Task/Action/Result breakdown on click, and the URL updates with a `#slug` so any entry is directly linkable.

Each law entry includes: title, category, origin (person/year where known), a one-line summary, a full explanation, a "why it matters" note, and links to related laws. Click any card to open the detail view; the URL updates with a `#slug` so entries are directly linkable and shareable.

## Deploy — Cloudflare Pages (Drag & Drop)

1. Go to the Cloudflare dashboard → **Workers & Pages** → **Create** → **Pages** → **Upload assets**.
2. Drag the entire unzipped folder (or just drag the `.zip` — Cloudflare Pages accepts zipped uploads too) onto the drop zone.
3. Deploy. Cloudflare will serve `index.html` automatically — no configuration needed.

## Deploy — GitHub Pages

1. Create a new GitHub repository (e.g. `lawsofcybersecurity`).
2. Unzip this package and push its contents to the repo root:
   ```
   git init
   git add .
   git commit -m "Initial site"
   git branch -M main
   git remote add origin https://github.com/<you>/lawsofcybersecurity.git
   git push -u origin main
   ```
3. In the repo, go to **Settings → Pages**, set **Source** to the `main` branch, root folder, and save.
4. Your site will be live at `https://<you>.github.io/lawsofcybersecurity/`.

To use a custom domain (e.g. `lawsofcybersecurity.com`) on either platform, add a `CNAME` file (GitHub Pages) or configure a custom domain in the Cloudflare Pages dashboard, then point your DNS accordingly.

## Editing content

Open `js/laws-data.js`. Each entry is a plain JS object — add a new one to the `LAWS` array following the existing shape, and it will automatically appear in the grid, search index, and filters. To add a new category, add an entry to `CATEGORIES` with a unique `id`, `label`, and accent `color` (hex).

## Notes on sourcing

Entries are written from established, publicly documented literature (academic papers, legal rulings, standards bodies, and widely cited security writing) and each notes its originator or origin context where a single one exists. This is a reference resource for educational purposes, not legal advice.
