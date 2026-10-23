import { useContext } from "react";
import { SesionContext } from "../context/contextos";

export function useSesion() {
  return useContext(SesionContext);
}
