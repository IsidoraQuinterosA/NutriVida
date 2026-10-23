import { useState } from "react";
import { useNavigate } from "react-router-dom";
import PlantillaPanel from "../../components/templates/PlantillaPanel";
import TablaCategorias from "../../components/organisms/TablaCategorias";
import Boton from "../../components/atoms/Boton";
import { useTituloPagina } from "../../hooks/useTituloPagina";
import { listarCategorias, eliminarCategoria } from "../../services/categoriasService";
import { listarPorCategoria } from "../../services/serviciosService";

function CategoriasAdmin() {
  const navigate = useNavigate();
  const [categorias, setCategorias] = useState(() => listarCategorias());
  const [error, setError] = useState("");
  useTituloPagina("Categorías");

  function eliminar(id) {
    try {
      eliminarCategoria(id);
      setCategorias(listarCategorias());
      setError("");
    } catch (e) {
      // No se puede eliminar una categoría que todavía tiene servicios
      setError(e.message);
    }
  }

  return (
    <PlantillaPanel titulo="Categorías">
      <div className="mb-3">
        <Boton texto="Nueva categoría" onClick={() => navigate("/admin/categorias/nueva")} />
      </div>

      {error && <div className="alert alert-danger" role="alert">{error}</div>}

      <TablaCategorias
        categorias={categorias}
        contarServicios={(id) => listarPorCategoria(id).length}
        onEditar={(id) => navigate("/admin/categorias/" + id + "/editar")}
        onEliminar={eliminar}
      />
    </PlantillaPanel>
  );
}

export default CategoriasAdmin;
