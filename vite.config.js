import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Replace this with your GitHub repo name
const repoName = 'nashville-auto-repairs-and-motorsports'

export default defineConfig({
  plugins: [react()],
  base: `/${repoName}/`,
})
