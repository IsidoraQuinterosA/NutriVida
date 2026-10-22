// Lectura del directorio de nutricionistas (no se edita desde la aplicación).
import { nutricionistas } from "../data/nutricionistas";

export function listarNutricionistas() {
  return nutricionistas;
}

export function obtenerNutricionista(id) {
  return nutricionistas.find((nutricionista) => nutricionista.id === id);
}

// Devuelve las citas con el nombre del nutricionista agregado (para mostrarlas en pantalla)
export function agregarNombreNutricionista(citas) {
  return citas.map((cita) => ({
    ...cita,
    nutricionistaNombre: obtenerNutricionista(cita.nutricionistaId).nombre,
  }));
}
