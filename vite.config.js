import react from '@vitejs/plugin-react'
import { defineConfig } from 'vitest/config'

export default defineConfig({
  plugins: [react()],
  test: {
    // Simula un navegador dentro de la terminal
    environment: 'jsdom',
    // Permite usar describe, it y expect sin importarlos
    globals: true,
    // Archivo que se ejecuta antes de cada archivo de pruebas
    setupFiles: './src/setupTests.js',
    coverage: {
      provider: 'v8',
      include: ['src/utils/**', 'src/services/**', 'src/components/**'],
    },
  },
})
