// Reglas de validación del proyecto.
// Cada función recibe un valor y devuelve un mensaje de error,
// o un texto vacío ("") si el valor está bien.

const patronRun = /^\d{6,8}[0-9Kk]$/;
const patronCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Calcula el dígito verificador de un RUN con el algoritmo módulo 11.
// Ej: para "12345678" devuelve "5".
function calcularDigitoVerificador(numero) {
  let suma = 0;
  let multiplicador = 2;

  // Se recorre el número de derecha a izquierda,
  // multiplicando cada dígito por 2, 3, 4, 5, 6, 7 y luego otra vez desde 2.
  for (let i = numero.length - 1; i >= 0; i--) {
    suma = suma + Number(numero[i]) * multiplicador;
    multiplicador = multiplicador === 7 ? 2 : multiplicador + 1;
  }

  const resultado = 11 - (suma % 11);

  if (resultado === 11) return "0";
  if (resultado === 10) return "K";
  return String(resultado);
}

export function validarRun(run) {
  const valor = run.trim();

  if (valor === "") return "El RUN es requerido.";
  if (/[.-]/.test(valor)) return "El RUN no debe contener puntos ni guion. Ej: 123456785";
  if (valor.length < 7 || valor.length > 9) return "El RUN debe tener entre 7 y 9 caracteres.";
  if (!patronRun.test(valor)) return "El RUN no es válido. Ej: 123456785";

  const numero = valor.slice(0, -1);
  const digito = valor.slice(-1).toUpperCase();

  if (calcularDigitoVerificador(numero) !== digito) {
    return "El dígito verificador del RUN no es correcto.";
  }

  return "";
}

export function validarNombre(nombre) {
  const valor = nombre.trim();

  if (valor === "") return "El nombre es requerido.";
  if (valor.length > 50) return "El nombre no puede superar los 50 caracteres.";

  return "";
}

export function validarApellidos(apellidos) {
  const valor = apellidos.trim();

  if (valor === "") return "Los apellidos son requeridos.";
  if (valor.length > 100) return "Los apellidos no pueden superar los 100 caracteres.";

  return "";
}

export function validarCorreo(correo) {
  const valor = correo.trim();

  if (valor === "") return "El correo es requerido.";
  if (valor.length > 100) return "El correo no puede superar los 100 caracteres.";
  if (!patronCorreo.test(valor)) return "El correo no es válido. Ej: nombre@correo.com";

  return "";
}

export function validarConfirmarCorreo(confirmacion, correo) {
  if (confirmacion.trim() === "") return "Debes confirmar tu correo.";
  if (confirmacion.trim() !== correo.trim()) return "Los correos no coinciden.";

  return "";
}

export function validarContrasena(contrasena) {
  if (contrasena === "") return "La contraseña es requerida.";
  if (contrasena.length < 8) return "La contraseña debe tener al menos 8 caracteres.";

  return "";
}

export function validarConfirmarContrasena(confirmacion, contrasena) {
  if (confirmacion === "") return "Debes confirmar tu contraseña.";
  if (confirmacion !== contrasena) return "Las contraseñas no coinciden.";

  return "";
}

export function validarDireccion(direccion) {
  const valor = direccion.trim();

  if (valor === "") return "La dirección es requerida.";
  if (valor.length > 300) return "La dirección no puede superar los 300 caracteres.";

  return "";
}

export function validarRol(rol) {
  if (rol === "") return "Debes seleccionar un rol.";

  return "";
}
