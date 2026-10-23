import { useContext } from "react";
import { SolicitudContext } from "../context/contextos";

export function useSolicitud() {
  return useContext(SolicitudContext);
}
