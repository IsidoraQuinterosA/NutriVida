export function crearLoginDto(formulario) {
  return {
    correo: formulario.correo.trim(),
    contrasena: formulario.contrasena,
  };
}

export function crearRegistroDto(formulario) {
  return {
    run: formulario.run.trim(),
    nombre: formulario.nombre.trim(),
    apellidos: formulario.apellidos.trim(),
    correo: formulario.correo.trim(),
    contrasena: formulario.contrasena,
    telefono: formulario.telefono.trim(),
    direccion: formulario.direccion.trim(),
  };
}

export function crearUsuarioDesdeApi(usuario) {
  return {
    id: usuario.id,
    run: usuario.run,
    nombre: usuario.nombre,
    apellidos: usuario.apellidos,
    correo: usuario.correo,
    telefono: usuario.telefono,
    direccion: usuario.direccion,
    rol: usuario.rol,
    nutricionistaId: usuario.nutricionistaCodigo,
    activo: usuario.activo,
  };
}