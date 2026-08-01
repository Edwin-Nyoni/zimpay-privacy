# ZivaPay+ website

Static GitHub Pages site for [zivapayplus.com](https://zivapayplus.com).

## Structure

- `index.html` contains the public landing-page content and accessible markup.
- `styles.css` contains the responsive visual system.
- `site.js` powers the money-path and synthetic money-story interactions.
- `updates.html` is the public release and product-progress record.
- `privacy.html` and `terms.html` are the public policy pages.
- `og-card-source.html` is the 1200x630 social-card source; render it to `og-image.png` after changing its content.
- App screenshots and Google Play assets live at the repository root.

## Local preview

```sh
python3 -m http.server 8080
```

Open `http://localhost:8080`. The site has no build step, framework, analytics script, cookie, or form submission. Google Play links carry content-specific campaign referrers for install attribution without adding a website tracker.

## Rollback baseline

The previous content-refresh version is preserved at the Git tag:

```text
website-content-refresh-2026-07-31
```
