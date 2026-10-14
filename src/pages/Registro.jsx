import { useNavigate } from "react-router-dom";
import PlantillaPrincipal from "../components/templates/PlantillaPrincipal";
import FormularioRegistro from "../components/organisms/FormularioRegistro";
import { useTituloPagina } from "../hooks/useTituloPagina";

function Registro() {
  const navigate = useNavigate();
  useTituloPagina("Crear cuenta");

  // Se ejecuta solo cuando el formulario avisa que todo está correcto
  function alRegistrarse() {
    navigate("/login");
  }

  function alIrAIniciarSesion() {
    navigate("/login");
  }

  return (
    <PlantillaPrincipal>
      <FormularioRegistro
        onEnviar={alRegistrarse}
        onIniciarSesion={alIrAIniciarSesion}
      />
    </PlantillaPrincipal>
  );
}

export default Registro;
