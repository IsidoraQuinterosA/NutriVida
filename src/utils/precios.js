export function formatearPrecio(valor) {
  return "$" + valor.toLocaleString("es-CL");
}

export function calcularTotal(items) {
  return items.reduce((total, item) => total + item.precio * item.cantidad, 0);
}

export function obtenerPrecioFinal(servicio) {
  return servicio.precioOferta !== null ? servicio.precioOferta : servicio.precio;
}

export function calcularPorcentajeDescuento(precio, precioOferta) {
  return Math.round((1 - precioOferta / precio) * 100);
}
