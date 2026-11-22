import react from '@vitejs/plugin-react'
import { defineConfig } from 'vitest/config'

const proxyApi = {
  '/api': 'http://localhost:3000',
}

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: proxyApi,
  },
  preview: {
    host: true,
    proxy: proxyApi,
  },
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: './src/setupTests.js',
    coverage: {
      provider: 'v8',
      include: ['src/utils/**', 'src/services/**', 'src/components/**'],
    },
  },
})