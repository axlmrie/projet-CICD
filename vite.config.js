import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom', // INDISPENSABLE : Simule le navigateur
    setupFiles: './src/setupTests.js', // INDISPENSABLE : Charge les outils de test
    css: true, // Pour éviter les erreurs si tu importes du CSS
  },
})