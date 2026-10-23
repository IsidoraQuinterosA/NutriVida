import { useState } from "react";
import { useNavigate } from "react-router-dom";
import PlantillaPanel from "../../components/templates/PlantillaPanel";
import FormularioCategoria from "../../components/organisms/FormularioCategoria";
import { useTituloPagina } from "../../hooks/useTituloPagina";
import { crearCategoria } from "../../services/categoriasService";

function NuevaCategoria() {
  const navigate = useNavigate();
  const [errorGeneral, setErrorGeneral] = useState("");
  useTituloPagina("Nueva categoría");

  function guardar(datos) {
    try {
      crearCategoria(datos);
      navigate("/admin/categorias");
    } catch (error) {
      setErrorGeneral(error.message);
    }
  }

  return (
    <PlantillaPanel titulo="Nueva categoría">
      <FormularioCategoria
        errorGeneral={errorGeneral}
        onEnviar={guardar}
        onCancelar={() => navigate("/admin/categorias")}
      />
    </PlantillaPanel>
  );
}

export default NuevaCategoria;
