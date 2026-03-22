import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
// Change `base` to match your GitHub repository name, e.g. '/my-repo/'
export default defineConfig({
  base: '/wedding/',
  plugins: [
    react(),
    tailwindcss(),
  ],
})
