import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { writeFileSync } from 'fs'
import { resolve } from 'path'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    {
      name: 'nojekyll',
      closeBundle() {
        writeFileSync(resolve(__dirname, 'docs', '.nojekyll'), '')
      },
    },
  ],
  base: './',
  build: {
    outDir: 'docs',
    emptyOutDir: true,
  },
})