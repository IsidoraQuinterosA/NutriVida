import { mediciones as medicionesIniciales, planes as planesIniciales } from "../data/fichas";
import { leer, guardar } from "./almacenamiento";

const CLAVE_MEDICIONES = "nutrivida_mediciones";
const CLAVE_PLANES = "nutrivida_planes";

export function listarMediciones(pacienteCorreo) {
  return leer(CLAVE_MEDICIONES, medicionesIniciales).filter((m) => m.pacienteCorreo === pacienteCorreo);
}

export function crearMedicion(datos) {
  const lista = leer(CLAVE_MEDICIONES, medicionesIniciales);
  const nuevoId = lista.reduce((mayor, m) => Math.max(mayor, m.id), 0) + 1;
  const nueva = { ...datos, id: nuevoId };

  guardar(CLAVE_MEDICIONES, [...lista, nueva]);
  return nueva;
}

export function obtenerPlan(pacienteCorreo) {
  return leer(CLAVE_PLANES, planesIniciales).find((plan) => plan.pacienteCorreo === pacienteCorreo);
}
