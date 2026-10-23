import { useState } from "react";
import { useNavigate } from "react-router-dom";
import PlantillaPanel from "../../components/templates/PlantillaPanel";
import TablaServicios from "../../components/organisms/TablaServicios";
import Boton from "../../components/atoms/Boton";
import { useTituloPagina } from "../../hooks/useTituloPagina";
import { listarServicios, eliminarServicio } from "../../services/serviciosService";
import { listarCategorias } from "../../services/categoriasService";

function ServiciosAdmin() {
  const navigate = useNavigate();
  const [servicios, setServicios] = useState(() => listarServicios());
  useTituloPagina("Servicios");

  function eliminar(codigo) {
    eliminarServicio(codigo);
    setServicios(listarServicios());
  }

  return (
    <PlantillaPanel titulo="Servicios">
      <div className="mb-3">
        <Boton texto="Nuevo servicio" onClick={() => navigate("/admin/servicios/nuevo")} />
      </div>

      <TablaServicios
        servicios={servicios}
        categorias={listarCategorias()}
        onVer={(codigo) => navigate("/servicios/" + codigo)}
        onEditar={(codigo) => navigate("/admin/servicios/" + codigo + "/editar")}
        onEliminar={eliminar}
      />
    </PlantillaPanel>
  );
}

export default ServiciosAdmin;

