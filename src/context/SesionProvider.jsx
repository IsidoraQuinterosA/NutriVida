import { useState, useEffect } from "react";
import { SesionContext } from "./contextos";
import { iniciarSesion as pedirInicioSesion, obtenerUsuarioActual } from "../services/authService";
import { leerToken, guardarToken, borrarToken } from "../services/api";
import { crearLoginDto, crearUsuarioDesdeApi } from "../dto/auth.dto";

const CLAVE = "nutrivida_sesion";

function leerUsuarioGuardado() {
  const guardado = sessionStorage.getItem(CLAVE);
  if (!guardado || !leerToken()) {
    return null;
  }
  return JSON.parse(guardado);
}

function SesionProvider(props) {
  const [usuario, setUsuario] = useState(leerUsuarioGuardado);

  function guardarUsuario(datos) {
    sessionStorage.setItem(CLAVE, JSON.stringify(datos));
    setUsuario(datos);
  }

  function cerrarSesion() {
    borrarToken();
    sessionStorage.removeItem(CLAVE);
    setUsuario(null);
  }

  useEffect(() => {
    function alVencerSesion() {
      sessionStorage.removeItem(CLAVE);
      setUsuario(null);
    }

    window.addEventListener("nutrivida:sesion-vencida", alVencerSesion);

    if (leerToken()) {
      obtenerUsuarioActual()
        .then((datos) => guardarUsuario(crearUsuarioDesdeApi(datos)))
        .catch(() => {});
    }

    return () => window.removeEventListener("nutrivida:sesion-vencida", alVencerSesion);
  }, []);

  async function iniciarSesion(correo, contrasena) {
    const respuesta = await pedirInicioSesion(crearLoginDto({ correo, contrasena }));
    guardarToken(respuesta.accessToken);
    const datos = crearUsuarioDesdeApi(respuesta.usuario);
    guardarUsuario(datos);
    return datos;
  }

  return (
    <SesionContext.Provider value={{ usuario, iniciarSesion, cerrarSesion }}>
      {props.children}
    </SesionContext.Provider>
  );
}

export default SesionProvider;