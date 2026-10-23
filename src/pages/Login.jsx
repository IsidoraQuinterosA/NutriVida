import { useState } from "react";
import { useNavigate } from "react-router-dom";
import PlantillaPrincipal from "../components/templates/PlantillaPrincipal";
import OrganismoLogin from "../components/organisms/OrganismoLogin";
import { useTituloPagina } from "../hooks/useTituloPagina";
import { useSesion } from "../hooks/useSesion";
import { rutaDelPanel } from "../utils/roles";

function LoginPage() {
  const navigate = useNavigate();
  const sesion = useSesion();
  const [errorGeneral, setErrorGeneral] = useState("");
  useTituloPagina("Iniciar sesión");

  function alIniciarSesion(datos) {
    const usuario = sesion.iniciarSesion(datos.correo, datos.contrasena);

    if (!usuario) {
      setErrorGeneral("Correo o contraseña incorrectos, o la cuenta está desactivada.");
      return;
    }

    navigate(rutaDelPanel(usuario.rol));
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
      />
    </PlantillaPrincipal>
  );
}

export default LoginPage;
