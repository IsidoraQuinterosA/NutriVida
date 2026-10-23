const patronRun = /^\d{6,8}[0-9Kk]$/;
const patronCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function calcularDigitoVerificador(numero) {
  let suma = 0;
  let multiplicador = 2;

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

export function validarObligatorio(valor, nombreCampo) {
  if (String(valor).trim() === "") return "El campo " + nombreCampo + " es obligatorio.";

  return "";
}

export function validarNumeroPositivo(valor, nombreCampo) {
  if (String(valor).trim() === "") return "El campo " + nombreCampo + " es obligatorio.";
  if (isNaN(Number(valor)) || Number(valor) <= 0) return "El campo " + nombreCampo + " debe ser un número mayor a 0.";

  return "";
}

export function validarNutricionista(nutricionistaId) {
  if (nutricionistaId === "") return "Debes elegir un nutricionista.";

  return "";
}

export function validarFechaCita(fecha, nutricionista, hoy) {
  if (fecha === "") return "Debes elegir una fecha.";
  if (!nutricionista) return "Primero elige un nutricionista.";
  if (fecha < hoy) return "La fecha no puede ser anterior a hoy.";

  const dia = new Date(fecha + "T00:00:00").getDay();

  if (!nutricionista.dias.includes(dia)) {
    return nutricionista.nombre + " no atiende ese día. Atiende: " + nutricionista.diasTexto + ".";
  }

  return "";
}

export function validarHoraCita(hora, nutricionista) {
  if (hora === "") return "Debes elegir una hora.";
  if (!nutricionista) return "Primero elige un nutricionista.";

  if (hora < nutricionista.horaInicio || hora >= nutricionista.horaFin) {
    return "La hora debe estar entre " + nutricionista.horaInicio + " y " + nutricionista.horaFin + ".";
  }

  return "";
}

export function validarMotivo(motivo) {
  const valor = motivo.trim();

  if (valor === "") return "Cuéntanos el motivo de tu consulta.";
  if (valor.length < 10) return "Describe el motivo con al menos 10 caracteres.";
  if (valor.length > 300) return "El motivo no puede superar los 300 caracteres.";

  return "";
}
