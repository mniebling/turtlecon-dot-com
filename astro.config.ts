import { defineConfig } from 'astro/config'

// https://astro.build/config
export default defineConfig({
	redirects: {
		// Point this at the current year's page group.
		'/': '/2026',
	},
})
