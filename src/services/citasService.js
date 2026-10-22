// CRUD de citas (la "solicitud" de NutriVida), con persistencia en localStorage.
import { citas as citasIniciales } from "../data/citas";
import { leer, guardar } from "./almacenamiento";

const CLAVE = "nutrivida_citas";

export function listarCitas() {
  return leer(CLAVE, citasIniciales);
}

export function obtenerCita(id) {
  return listarCitas().find((cita) => cita.id === Number(id));
}

export function listarPorPaciente(correo) {
  return listarCitas().filter((cita) => cita.pacienteCorreo === correo);
}

export function listarPorNutricionista(nutricionistaId) {
  return listarCitas().filter((cita) => cita.nutricionistaId === nutricionistaId);
}

// Revisa si el nutricionista ya tiene otra cita activa en esa fecha y hora.
function horarioOcupado(lista, nutricionistaId, fecha, hora, idIgnorado) {
  return lista.some(
    (cita) =>
      cita.id !== idIgnorado &&
      cita.nutricionistaId === nutricionistaId &&
      cita.fecha === fecha &&
      cita.hora === hora &&
      cita.estado !== "cancelada"
  );
}

export function crearCita(datos) {
  const lista = listarCitas();

  if (horarioOcupado(lista, datos.nutricionistaId, datos.fecha, datos.hora, null)) {
    throw new Error("El nutricionista ya tiene una cita en ese horario. Elige otra hora.");
  }

  const nuevoId = lista.reduce((mayor, c) => Math.max(mayor, c.id), 0) + 1;
  const nueva = {
    ...datos,
    id: nuevoId,
    numero: "NV-" + String(nuevoId).padStart(4, "0"),
    estado: "pendiente",
  };

  guardar(CLAVE, [...lista, nueva]);
  return nueva;
}

export function actualizarCita(id, cambios) {
  const lista = listarCitas();

  if (!lista.some((c) => c.id === Number(id))) {
    throw new Error("No existe la cita " + id);
  }

  const nuevaLista = lista.map((c) => (c.id === Number(id) ? { ...c, ...cambios, id: c.id } : c));
  guardar(CLAVE, nuevaLista);
  return nuevaLista.find((c) => c.id === Number(id));
}

export function cambiarEstado(id, estado) {
  return actualizarCita(id, { estado });
}

export function reprogramarCita(id, fecha, hora) {
  const cita = obtenerCita(id);

  if (horarioOcupado(listarCitas(), cita.nutricionistaId, fecha, hora, cita.id)) {
    throw new Error("El nutricionista ya tiene una cita en ese horario. Elige otra hora.");
  }

  // Al reprogramar, la cita vuelve a quedar pendiente de confirmación
  return actualizarCita(id, { fecha, hora, estado: "pendiente" });
}

export function eliminarCita(id) {
  guardar(CLAVE, listarCitas().filter((c) => c.id !== Number(id)));
}
