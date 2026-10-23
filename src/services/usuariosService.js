import { usuarios as usuariosIniciales } from "../data/usuarios";
import { leer, guardar } from "./almacenamiento";

const CLAVE = "nutrivida_usuarios";

export function listarUsuarios() {
  return leer(CLAVE, usuariosIniciales);
}

export function obtenerUsuario(id) {
  return listarUsuarios().find((usuario) => usuario.id === Number(id));
}

export function buscarPorCorreo(correo) {
  const buscado = correo.trim().toLowerCase();
  return listarUsuarios().find((usuario) => usuario.correo.toLowerCase() === buscado);
}

export function crearUsuario(datos) {
  const lista = listarUsuarios();

  if (buscarPorCorreo(datos.correo)) {
    throw new Error("Ya existe una cuenta con el correo " + datos.correo);
  }

  const nuevoId = lista.reduce((mayor, u) => Math.max(mayor, u.id), 0) + 1;
  const nuevo = {
    rol: "paciente",
    nutricionistaId: null,
    activo: true,
    telefono: "",
    direccion: "",
    ...datos,
    id: nuevoId,
  };

  guardar(CLAVE, [...lista, nuevo]);
  return nuevo;
}

export function actualizarUsuario(id, cambios) {
  const lista = listarUsuarios();

  if (!lista.some((u) => u.id === Number(id))) {
    throw new Error("No existe el usuario " + id);
  }

  const nuevaLista = lista.map((u) => (u.id === Number(id) ? { ...u, ...cambios, id: u.id } : u));
  guardar(CLAVE, nuevaLista);
  return nuevaLista.find((u) => u.id === Number(id));
}

export function eliminarUsuario(id) {
  guardar(CLAVE, listarUsuarios().filter((u) => u.id !== Number(id)));
}

export function validarCredenciales(correo, contrasena) {
  const usuario = buscarPorCorreo(correo);

  if (!usuario || usuario.contrasena !== contrasena || !usuario.activo) {
    return null;
  }

  return usuario;
}
