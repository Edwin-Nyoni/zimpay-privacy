# ZivaPay+ website

Static GitHub Pages site for [zivapayplus.com](https://zivapayplus.com).

## Structure

- `index.html` contains the public landing-page content and accessible markup.
- `styles.css` contains the responsive visual system.
- `site.js` powers the money-path and synthetic money-story interactions.
- `privacy.html` and `terms.html` are the public policy pages.
- App screenshots and Google Play assets live at the repository root.

## Local preview

```sh
python3 -m http.server 8080
```

Open `http://localhost:8080`. The site has no build step, framework, analytics script, or form submission.

## Rollback baseline

The previous content-refresh version is preserved at the Git tag:

```text
website-content-refresh-2026-07-31
```
