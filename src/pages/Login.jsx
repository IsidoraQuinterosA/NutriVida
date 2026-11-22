import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import PlantillaPrincipal from "../components/templates/PlantillaPrincipal";
import OrganismoLogin from "../components/organisms/OrganismoLogin";
import { useTituloPagina } from "../hooks/useTituloPagina";
import { useSesion } from "../hooks/useSesion";
import { rutaDelPanel } from "../utils/roles";
import { obtenerMensajeError } from "../services/api";

function LoginPage() {
  const navigate = useNavigate();
  const ubicacion = useLocation();
  const sesion = useSesion();
  const [errorGeneral, setErrorGeneral] = useState("");
  const [cargando, setCargando] = useState(false);
  useTituloPagina("Iniciar sesión");

  const mensajeExito = ubicacion.state && ubicacion.state.mensaje ? ubicacion.state.mensaje : "";

  async function alIniciarSesion(datos) {
    setCargando(true);
    setErrorGeneral("");
    try {
      const usuario = await sesion.iniciarSesion(datos.correo, datos.contrasena);
      navigate(rutaDelPanel(usuario.rol));
    } catch (error) {
      setErrorGeneral(obtenerMensajeError(error));
    } finally {
      setCargando(false);
    }
  }

  function alIrARegistro() {
    navigate("/registro");
  }

  return (
    <PlantillaPrincipal>
      <OrganismoLogin
        onEnviar={alIniciarSesion}
        onRegistrarse={alIrARegistro}
        errorGeneral={errorGeneral}
        mensajeExito={errorGeneral ? "" : mensajeExito}
        cargando={cargando}
      />
    </PlantillaPrincipal>
  );
}

export default LoginPage;