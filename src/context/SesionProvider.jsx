import { useState } from "react";
import { SesionContext } from "./contextos";
import { validarCredenciales } from "../services/usuariosService";
import { leer, guardar, borrar } from "../services/almacenamiento";

const CLAVE = "nutrivida_sesion";

function SesionProvider(props) {
  const [usuario, setUsuario] = useState(() => leer(CLAVE, null));

  function iniciarSesion(correo, contrasena) {
    const encontrado = validarCredenciales(correo, contrasena);

    if (!encontrado) {
      return null;
    }

    const datosSesion = {
      id: encontrado.id,
      run: encontrado.run,
      nombre: encontrado.nombre,
      apellidos: encontrado.apellidos,
      correo: encontrado.correo,
      telefono: encontrado.telefono,
      direccion: encontrado.direccion,
      rol: encontrado.rol,
      nutricionistaId: encontrado.nutricionistaId,
    };

    setUsuario(datosSesion);
    guardar(CLAVE, datosSesion);
    return datosSesion;
  }

  function cerrarSesion() {
    setUsuario(null);
    borrar(CLAVE);
  }

  return (
    <SesionContext.Provider value={{ usuario, iniciarSesion, cerrarSesion }}>
      {props.children}
    </SesionContext.Provider>
  );
}

export default SesionProvider;
