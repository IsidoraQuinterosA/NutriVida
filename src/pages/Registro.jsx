import { useNavigate } from "react-router-dom";
import LoginTemplate from "../components/templates/LoginTemplate";
import FormularioRegistro from "../components/organisms/FormularioRegistro";
import { useTituloPagina } from "../hooks/useTituloPagina";

function Registro() {
  const navigate = useNavigate();
  useTituloPagina("Crear cuenta");

  // Se ejecuta solo cuando el formulario avisa que todo está correcto
  function alRegistrarse() {
    navigate("/login");
  }

  return (
    <LoginTemplate>
      <FormularioRegistro onEnviar={alRegistrarse} />
    </LoginTemplate>
  );
}

export default Registro;
