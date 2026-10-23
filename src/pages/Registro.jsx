import { useState } from "react";
import { useNavigate } from "react-router-dom";
import PlantillaPrincipal from "../components/templates/PlantillaPrincipal";
import FormularioRegistro from "../components/organisms/FormularioRegistro";
import { useTituloPagina } from "../hooks/useTituloPagina";
import { crearUsuario } from "../services/usuariosService";

function Registro() {
  const navigate = useNavigate();
  const [errorGeneral, setErrorGeneral] = useState("");
  useTituloPagina("Crear cuenta");

  function alRegistrarse(datos) {
    try {
      crearUsuario({ ...datos, rol: "paciente" });
      navigate("/login");
    } catch (error) {
      setErrorGeneral(error.message);
    }
  }

  function alIrAIniciarSesion() {
    navigate("/login");
  }

  return (
    <PlantillaPrincipal>
      <FormularioRegistro
        onEnviar={alRegistrarse}
        onIniciarSesion={alIrAIniciarSesion}
        errorGeneral={errorGeneral}
      />
    </PlantillaPrincipal>
  );
}

export default Registro;
