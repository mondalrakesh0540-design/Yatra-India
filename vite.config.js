import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import fs from 'fs'

// https://vitejs.dev/config/
export default defineConfig(({ command }) => {
  // Use '/' on Vercel, Netlify and root deployments; use '/Yatra-India/' only if explicitly targeting GitHub Pages
  const isGhPages = process.env.DEPLOY_TARGET === 'gh-pages' || process.env.GITHUB_PAGES === 'true';
  const base = process.env.VERCEL ? '/' : (isGhPages ? '/Yatra-India/' : '/');

  return {
    base,
    plugins: [
      react(),
    {
      name: 'copy-404',
      closeBundle() {
        const distDir = path.resolve(__dirname, 'dist')
        const indexPath = path.join(distDir, 'index.html')
        const notFoundPath = path.join(distDir, '404.html')
        if (fs.existsSync(indexPath)) {
          fs.copyFileSync(indexPath, notFoundPath)
        }
      }
    }
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    port: 5173,
    host: true,
    proxy: {
      '/api': {
        target: 'http://localhost:5000',
        changeOrigin: true
      }
    }
  }
};
});
