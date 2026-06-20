import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
// IMPORTANT for GitHub Pages: set `base` to your repo name, e.g. '/phantom-vision/'
// If you deploy to a custom domain or user/org root page, set base to '/'
export default defineConfig({
  base: '/phantom-vision/',
  plugins: [react()],
})
