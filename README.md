# Lakshan Peramuna — Portfolio

A fast, responsive, single-page developer portfolio. Pure static HTML/CSS/JS — no build step, no dependencies. Ready to host on GitHub Pages.

**Live site:** _add your GitHub Pages URL here once deployed_

## Features

- Responsive layout (mobile → desktop)
- Dark / light theme toggle (remembers your choice)
- Smooth scrolling + scroll-reveal animations
- Downloadable CV
- Accessible, SEO-friendly meta tags, and honours `prefers-reduced-motion`

## Structure

```
portfolio/
├── index.html                     # the whole site (HTML + inline CSS/JS)
├── favicon.svg                    # site icon
├── .nojekyll                      # tells GitHub Pages to serve files as-is
├── assets/
│   └── Lakshan_Peramuna_CV.pdf    # downloadable CV
└── README.md
```

## Preview locally

Just open `index.html` in a browser, or run a tiny static server:

```bash
python3 -m http.server 8000
# then visit http://localhost:8000
```

## Deploy to GitHub Pages

1. Create a new GitHub repository (e.g. `portfolio` or `<username>.github.io`).
2. Push these files:

   ```bash
   git init
   git add .
   git commit -m "Add portfolio site"
   git branch -M main
   git remote add origin https://github.com/lbp003/<repo-name>.git
   git push -u origin main
   ```

3. On GitHub: **Settings → Pages → Build and deployment**
   - **Source:** *Deploy from a branch*
   - **Branch:** `main` / `root`
   - Save.
4. Your site goes live at `https://lbp003.github.io/<repo-name>/`
   (or `https://lbp003.github.io/` if the repo is named `lbp003.github.io`).

> Tip: name the repo **`lbp003.github.io`** to get the clean root URL with no sub-path.

## Editing your content

All content lives in `index.html` and is clearly sectioned with comments
(`<!-- ============ SECTION ============ -->`). To tweak colours, edit the
CSS variables in the `:root { ... }` block near the top of the file.
