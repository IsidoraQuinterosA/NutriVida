
export function validarCodigoServicio(codigo) {
  const valor = codigo.trim();

  if (valor === "") return "El código es obligatorio.";
  if (!/^[A-Z]{2}\d{3}$/.test(valor)) return "El código debe tener 2 letras mayúsculas y 3 números. Ej: CN006";

  return "";
}


export function validarPrecioOferta(precioOferta, precio) {
  if (String(precioOferta).trim() === "") return "";
  if (isNaN(Number(precioOferta)) || Number(precioOferta) <= 0) return "El precio de oferta debe ser un número mayor a 0.";
  if (Number(precioOferta) >= Number(precio)) return "El precio de oferta debe ser menor al precio normal.";

  return "";
}

export function validarCupos(cupos) {
  if (String(cupos).trim() === "") return "Los cupos son obligatorios.";
  if (!Number.isInteger(Number(cupos)) || Number(cupos) < 0) return "Los cupos deben ser un número entero igual o mayor a 0.";

  return "";
}
