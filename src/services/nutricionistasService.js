import { nutricionistas } from "../data/nutricionistas";

export function listarNutricionistas() {
  return nutricionistas;
}

export function obtenerNutricionista(id) {
  return nutricionistas.find((nutricionista) => nutricionista.id === id);
}

export function agregarNombreNutricionista(citas) {
  return citas.map((cita) => ({
    ...cita,
    nutricionistaNombre: obtenerNutricionista(cita.nutricionistaId).nombre,
  }));
}
