# AGENTS.md

This is a static site built with Astro.js.

Astro's up-to-date documentation is available via an MCP. If it's not configured, see: https://docs.astro.build/en/guides/build-with-ai/#astro-docs-mcp-server

## Site structure

TurtleCon is a yearly convention. Each year has its own theme, and past years must stay intact.

- Each year is an explicit directory in `src/pages/<year>/` (e.g. `src/pages/2026/`). Don't use dynamic `[year]` routes.
- Each year has its own layout in `src/layouts/Layout<year>.astro`. Pages in a year's directory use only that year's layout.
- Pages for a year: `index.astro` (nav hub), `food.astro`, `drinks.astro`.
- `/` redirects to the current year. Production (Netlify) uses a real 302 in `public/_redirects`, which avoids the white flash of Astro's generated redirect page. Local dev uses `redirects` in `astro.config.ts`.

## Style isolation

- Never edit a past year's layout, pages, or styles when working on a different year.
- Put styles in the year's own layout/pages or in files under a year-specific path (e.g. `src/styles/2026/`). Don't use global CSS, shared stylesheets, or shared theme tokens across years.
- Don't extract shared components that carry styling. If something is reused across years, it must be unstyled or take its look from the year's layout. A style change for one year must never alter another year.
- Prefer Astro's scoped `<style>` blocks. Use `is:global` only inside a year's layout, and scope it to that year (e.g. under a year-specific class on `<body>`).

## Starting a new year

1. Copy the previous year's `src/pages/<year>/` and its layout to the new year. Rename the layout and update the imports and links.
2. Update the `/` redirect in both `astro.config.ts` and `public/_redirects`.
3. Leave all earlier years untouched.

## Icons

- Each year has its own icons in `public/`, named for the year: `favicon-<year>.png` and `apple-touch-icon-<year>.png`. They're linked from that year's layout, so a new year gets new URLs and nothing stale is cached.
- Links carry a `?v=1` query string. If you change an icon within the same year, bump it (`?v=2`) so browsers, especially Safari, re-fetch it.
- The favicon is a transparent-background shape (no box), because Safari drew a white border around an opaque square. The apple-touch-icon is an opaque full-bleed square, as iOS expects.
