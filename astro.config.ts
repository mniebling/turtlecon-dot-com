import { defineConfig } from 'astro/config'

// https://astro.build/config
export default defineConfig({
	redirects: {
		// Point this at the current year's page group. Netlify serves a real
		// 302 from public/_redirects in production; this covers local dev.
		'/': '/2026',
	},
})
