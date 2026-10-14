import { useNavigate } from "react-router-dom";
import LoginTemplate from "../components/templates/LoginTemplate";
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
    <LoginTemplate>
      <OrganismoLogin
        onEnviar={alIniciarSesion}
        onRegistrarse={alIrARegistro}
      />
    </LoginTemplate>
  );
}

export default LoginPage;
