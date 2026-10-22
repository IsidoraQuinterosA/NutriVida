import { createContext } from "react";

// "Cajas" compartidas entre componentes. Los Provider las llenan
// y los hooks useSesion / useSolicitud las abren.
export const SesionContext = createContext(null);
export const SolicitudContext = createContext(null);
