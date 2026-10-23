import { useNavigate, useParams } from "react-router-dom";
import PlantillaPanel from "../../components/templates/PlantillaPanel";
import FormularioServicio from "../../components/organisms/FormularioServicio";
import { useTituloPagina } from "../../hooks/useTituloPagina";
import { obtenerServicio, actualizarServicio } from "../../services/serviciosService";
import { listarCategorias } from "../../services/categoriasService";

// Ruta: /admin/servicios/:codigo/editar
function EditarServicio() {
  const navigate = useNavigate();
  const params = useParams();
  const servicio = obtenerServicio(params.codigo);
  useTituloPagina("Editar servicio");

  if (!servicio) {
    return (
      <PlantillaPanel titulo="Editar servicio">
        <p>No existe el servicio "{params.codigo}".</p>
      </PlantillaPanel>
    );
  }

  function guardar(datos) {
    actualizarServicio(servicio.codigo, datos);
    navigate("/admin/servicios");
  }

  return (
    <PlantillaPanel titulo={"Editar " + servicio.codigo}>
      <FormularioServicio
        servicioInicial={servicio}
        categorias={listarCategorias()}
        onEnviar={guardar}
        onCancelar={() => navigate("/admin/servicios")}
      />
    </PlantillaPanel>
  );
}

export default EditarServicio;
