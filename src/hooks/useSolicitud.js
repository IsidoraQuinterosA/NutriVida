import { useContext } from "react";
import { SolicitudContext } from "../context/contextos";

// Hook propio: abre la caja de la solicitud en curso.
// Devuelve { items, total, cantidadTotal, agregar, cambiarCantidad, quitar, limpiar }
export function useSolicitud() {
  return useContext(SolicitudContext);
}
