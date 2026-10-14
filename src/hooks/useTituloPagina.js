import { useEffect } from "react";

// Hook propio: cambia el título de la pestaña del navegador.
// useEffect se ejecuta después de dibujar la página, y solo se repite si "titulo" cambia.
export function useTituloPagina(titulo) {
  useEffect(() => {
    document.title = titulo + " | NutriVida";
  }, [titulo]);
}
