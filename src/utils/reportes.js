// Funciones puras para los reportes del administrador.

// Cuántas citas hay en cada estado
export function contarPorEstado(citas) {
  const conteo = { pendiente: 0, confirmada: 0, atendida: 0, cancelada: 0, inasistencia: 0 };

  citas.forEach((cita) => {
    conteo[cita.estado] = conteo[cita.estado] + 1;
  });

  return conteo;
}

// Cuántas citas tiene cada nutricionista
export function contarPorNutricionista(citas, nutricionistas) {
  return nutricionistas.map((nutricionista) => ({
    id: nutricionista.id,
    nombre: nutricionista.nombre,
    cantidad: citas.filter((cita) => cita.nutricionistaId === nutricionista.id).length,
  }));
}

// Porcentaje de inasistencia: citas "inasistencia" sobre las citas que ya ocurrieron
// (atendidas + inasistencias). Si no ha ocurrido ninguna, es 0.
export function calcularTasaInasistencia(citas) {
  const conteo = contarPorEstado(citas);
  const ocurridas = conteo.atendida + conteo.inasistencia;

  if (ocurridas === 0) {
    return 0;
  }

  return Math.round((conteo.inasistencia / ocurridas) * 100);
}

// Suma lo cobrado en las citas atendidas
export function calcularIngresos(citas) {
  return citas
    .filter((cita) => cita.estado === "atendida")
    .reduce((suma, cita) => suma + cita.total, 0);
}
