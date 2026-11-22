import { api } from "./api";

export async function iniciarSesion(dto) {
  const respuesta = await api.post("/auth/login", dto);
  return respuesta.data;
}

export async function registrar(dto) {
  const respuesta = await api.post("/auth/register", dto);
  return respuesta.data;
}

export async function obtenerUsuarioActual() {
  const respuesta = await api.get("/auth/me");
  return respuesta.data;
}