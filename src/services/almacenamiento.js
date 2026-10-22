// Funciones para guardar y leer datos en localStorage.
// Todos los servicios usan estas dos funciones: nadie toca localStorage directamente.

// Devuelve lo guardado con esa clave. Si no hay nada, devuelve una copia de los datos iniciales.
export function leer(clave, datosIniciales) {
  const guardado = localStorage.getItem(clave);

  if (guardado === null) {
    return structuredClone(datosIniciales);
  }

  return JSON.parse(guardado);
}

export function guardar(clave, datos) {
  localStorage.setItem(clave, JSON.stringify(datos));
}

export function borrar(clave) {
  localStorage.removeItem(clave);
}
