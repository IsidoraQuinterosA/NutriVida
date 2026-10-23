export function formatearFecha(fechaISO) {
  const partes = fechaISO.split("-");
  return partes[2] + "-" + partes[1] + "-" + partes[0];
}

export function fechaHoyISO() {
  const hoy = new Date();
  const mes = String(hoy.getMonth() + 1).padStart(2, "0");
  const dia = String(hoy.getDate()).padStart(2, "0");
  return hoy.getFullYear() + "-" + mes + "-" + dia;
}

export function ordenarCitas(citas) {
  return [...citas].sort((a, b) => (a.fecha + a.hora).localeCompare(b.fecha + b.hora));
}
