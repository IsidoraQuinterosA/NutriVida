export function contarPorEstado(citas) {
  const conteo = { pendiente: 0, confirmada: 0, atendida: 0, cancelada: 0, inasistencia: 0 };

  citas.forEach((cita) => {
    conteo[cita.estado] = conteo[cita.estado] + 1;
  });

  return conteo;
}

export function contarPorNutricionista(citas, nutricionistas) {
  return nutricionistas.map((nutricionista) => ({
    id: nutricionista.id,
    nombre: nutricionista.nombre,
    cantidad: citas.filter((cita) => cita.nutricionistaId === nutricionista.id).length,
  }));
}

export function calcularTasaInasistencia(citas) {
  const conteo = contarPorEstado(citas);
  const ocurridas = conteo.atendida + conteo.inasistencia;

  if (ocurridas === 0) {
    return 0;
  }

  return Math.round((conteo.inasistencia / ocurridas) * 100);
}

export function calcularIngresos(citas) {
  return citas
    .filter((cita) => cita.estado === "atendida")
    .reduce((suma, cita) => suma + cita.total, 0);
}
