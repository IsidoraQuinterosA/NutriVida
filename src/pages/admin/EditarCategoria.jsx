import { useNavigate, useParams } from "react-router-dom";
import PlantillaPanel from "../../components/templates/PlantillaPanel";
import FormularioCategoria from "../../components/organisms/FormularioCategoria";
import { useTituloPagina } from "../../hooks/useTituloPagina";
import { obtenerCategoria, actualizarCategoria } from "../../services/categoriasService";

// Ruta: /admin/categorias/:id/editar
function EditarCategoria() {
  const navigate = useNavigate();
  const params = useParams();
  const categoria = obtenerCategoria(params.id);
  useTituloPagina("Editar categoría");

  if (!categoria) {
    return (
      <PlantillaPanel titulo="Editar categoría">
        <p>No existe la categoría "{params.id}".</p>
      </PlantillaPanel>
    );
  }

  function guardar(datos) {
    actualizarCategoria(categoria.id, datos);
    navigate("/admin/categorias");
  }

  return (
    <PlantillaPanel titulo={"Editar " + categoria.nombre}>
      <FormularioCategoria
        categoriaInicial={categoria}
        onEnviar={guardar}
        onCancelar={() => navigate("/admin/categorias")}
      />
    </PlantillaPanel>
  );
}

export default EditarCategoria;
