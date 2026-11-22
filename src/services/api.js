import axios from "axios";

const CLAVE_TOKEN = "nutrivida_token";

export const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || "/api/v1",
  timeout: 10000,
});

export function leerToken() {
  return sessionStorage.getItem(CLAVE_TOKEN);
}

export function guardarToken(token) {
  sessionStorage.setItem(CLAVE_TOKEN, token);
}

export function borrarToken() {
  sessionStorage.removeItem(CLAVE_TOKEN);
}

api.interceptors.request.use((configuracion) => {
  const token = leerToken();
  if (token) {
    configuracion.headers.Authorization = "Bearer " + token;
  }
  return configuracion;
});

api.interceptors.response.use(
  (respuesta) => respuesta,
  (error) => {
    if (error.response && error.response.status === 401 && leerToken()) {
      borrarToken();
      window.dispatchEvent(new Event("nutrivida:sesion-vencida"));
    }
    return Promise.reject(error);
  }
);

export function obtenerMensajeError(error) {
  if (error.response) {
    const datos = error.response.data;
    if (datos && typeof datos.mensaje === "string") {
      const detalles = Array.isArray(datos.detalles) ? datos.detalles.join(" ") : "";
      return datos.mensaje + (detalles ? " " + detalles : "");
    }
    return "La API respondió con un error (" + error.response.status + ").";
  }
  if (error.code === "ECONNABORTED") return "La API tardó demasiado en responder. Intenta de nuevo.";
  return "No fue posible contactar la API. Revisa que el backend esté encendido.";
}