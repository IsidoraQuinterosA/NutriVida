// "2026-10-27" -> "27-10-2026"
export function formatearFecha(fechaISO) {
  const partes = fechaISO.split("-");
  return partes[2] + "-" + partes[1] + "-" + partes[0];
}

// Fecha de hoy en formato "AAAA-MM-DD" (el formato de los <input type="date">)
export function fechaHoyISO() {
  const hoy = new Date();
  const mes = String(hoy.getMonth() + 1).padStart(2, "0");
  const dia = String(hoy.getDate()).padStart(2, "0");
  return hoy.getFullYear() + "-" + mes + "-" + dia;
}
