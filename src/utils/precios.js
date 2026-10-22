// Funciones puras sobre precios: reciben datos y devuelven un resultado.

// 35000 -> "$35.000"
export function formatearPrecio(valor) {
  return "$" + valor.toLocaleString("es-CL");
}

// Suma precio x cantidad de cada item
export function calcularTotal(items) {
  return items.reduce((total, item) => total + item.precio * item.cantidad, 0);
}

// Si el servicio está en oferta, se cobra el precio de oferta
export function obtenerPrecioFinal(servicio) {
  return servicio.precioOferta !== null ? servicio.precioOferta : servicio.precio;
}

// Porcentaje de descuento redondeado. Ej: (65000, 55250) -> 15
export function calcularPorcentajeDescuento(precio, precioOferta) {
  return Math.round((1 - precioOferta / precio) * 100);
}
