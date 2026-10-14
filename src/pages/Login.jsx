import { useNavigate } from "react-router-dom";
import PlantillaPrincipal from "../components/templates/PlantillaPrincipal";
import OrganismoLogin from "../components/organisms/OrganismoLogin";
import { useTituloPagina } from "../hooks/useTituloPagina";

function LoginPage() {
  const navigate = useNavigate();
  useTituloPagina("Iniciar sesión");

  // Se ejecuta solo cuando el formulario avisa que todo está correcto
  function alIniciarSesion() {
    navigate("/tipos-servicios");
  }

  function alIrARegistro() {
    navigate("/registro");
  }

  return (
    <PlantillaPrincipal>
      <OrganismoLogin
        onEnviar={alIniciarSesion}
        onRegistrarse={alIrARegistro}
      />
    </PlantillaPrincipal>
  );
}

export default LoginPage;
