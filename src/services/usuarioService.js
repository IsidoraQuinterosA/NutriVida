import { api } from "./api";
import { crearUsuarioDesdeApi } from "../dto/auth.dto";

export async function listarUsuarios() {
  const respuesta = await api.get("/usuarios");
  return respuesta.data.map(crearUsuarioDesdeApi);
}

export async function obtenerUsuario(id) {
  const respuesta = await api.get("/usuarios/" + id);
  return crearUsuarioDesdeApi(respuesta.data);
}

export async function crearUsuario(dto) {
  const respuesta = await api.post("/usuarios", dto);
  return crearUsuarioDesdeApi(respuesta.data);
}

export async function actualizarUsuario(id, dto) {
  const respuesta = await api.put("/usuarios/" + id, dto);
  return crearUsuarioDesdeApi(respuesta.data);
}

export async function desactivarUsuario(id) {
  await api.delete("/usuarios/" + id);
}
