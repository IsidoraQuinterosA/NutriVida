export function crearAltaUsuarioDto(formulario) {
  return {
    run: formulario.run.trim(),
    nombre: formulario.nombre.trim(),
    apellidos: formulario.apellidos.trim(),
    correo: formulario.correo.trim(),
    contrasena: formulario.contrasena,
    telefono: formulario.telefono.trim(),
    direccion: formulario.direccion.trim(),
    rol: formulario.rol,
    nutricionistaCodigo: formulario.rol === "nutricionista" ? formulario.nutricionistaId : null,
  };
}

export function crearEdicionUsuarioDto(formulario) {
  const dto = {
    nombre: formulario.nombre.trim(),
    apellidos: formulario.apellidos.trim(),
    telefono: formulario.telefono.trim(),
    direccion: formulario.direccion.trim(),
    rol: formulario.rol,
    nutricionistaCodigo: formulario.rol === "nutricionista" ? formulario.nutricionistaId : null,
  };
  if (formulario.contrasena) {
    dto.contrasena = formulario.contrasena;
  }
  return dto;
}

export function crearCambioEstadoDto(usuario, activo) {
  return {
    nombre: usuario.nombre,
    apellidos: usuario.apellidos,
    telefono: usuario.telefono,
    direccion: usuario.direccion,
    activo: activo,
  };
}
