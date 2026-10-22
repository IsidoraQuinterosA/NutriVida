import { useContext } from "react";
import { SesionContext } from "../context/contextos";

// Hook propio: abre la caja de la sesión. Devuelve { usuario, iniciarSesion, cerrarSesion }
export function useSesion() {
  return useContext(SesionContext);
}
