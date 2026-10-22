import { useState } from "react";
import { useNavigate } from "react-router-dom";
import PlantillaPanel from "../../components/templates/PlantillaPanel";
import FormularioUsuario from "../../components/organisms/FormularioUsuario";
import { useTituloPagina } from "../../hooks/useTituloPagina";
import { crearUsuario } from "../../services/usuariosService";
import { listarNutricionistas } from "../../services/nutricionistasService";

function NuevoUsuario() {
  const navigate = useNavigate();
  const [errorGeneral, setErrorGeneral] = useState("");
  useTituloPagina("Nuevo usuario");

  function guardar(datos) {
    try {
      crearUsuario(datos);
      navigate("/admin/usuarios");
    } catch (error) {
      // Por ejemplo: ya existe una cuenta con ese correo
      setErrorGeneral(error.message);
    }
  }

  return (
    <PlantillaPanel titulo="Nuevo usuario">
      <FormularioUsuario
        nutricionistas={listarNutricionistas()}
        errorGeneral={errorGeneral}
        onEnviar={guardar}
        onCancelar={() => navigate("/admin/usuarios")}
      />
    </PlantillaPanel>
  );
}

export default NuevoUsuario;
