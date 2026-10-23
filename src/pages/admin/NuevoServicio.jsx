import { useState } from "react";
import { useNavigate } from "react-router-dom";
import PlantillaPanel from "../../components/templates/PlantillaPanel";
import FormularioServicio from "../../components/organisms/FormularioServicio";
import { useTituloPagina } from "../../hooks/useTituloPagina";
import { crearServicio } from "../../services/serviciosService";
import { listarCategorias } from "../../services/categoriasService";

function NuevoServicio() {
  const navigate = useNavigate();
  const [errorGeneral, setErrorGeneral] = useState("");
  useTituloPagina("Nuevo servicio");

  function guardar(datos) {
    try {
      crearServicio(datos);
      navigate("/admin/servicios");
    } catch (error) {
      setErrorGeneral(error.message);
    }
  }

  return (
    <PlantillaPanel titulo="Nuevo servicio">
      <FormularioServicio
        categorias={listarCategorias()}
        errorGeneral={errorGeneral}
        onEnviar={guardar}
        onCancelar={() => navigate("/admin/servicios")}
      />
    </PlantillaPanel>
  );
}

export default NuevoServicio;
