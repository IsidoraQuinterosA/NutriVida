import '@testing-library/jest-dom/vitest'
import { afterEach } from 'vitest'

// Limpieza: después de cada prueba se borra lo guardado en localStorage,
// así ninguna prueba depende de lo que dejó la anterior.
afterEach(() => {
  localStorage.clear()
})
