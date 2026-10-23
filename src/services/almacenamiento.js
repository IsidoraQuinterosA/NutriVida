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
