import CampoBusqueda from "../atoms/CampoBusqueda";
import Selector from "../atoms/Selector";

function BarraFiltros(props) {
    
  const opciones = props.categorias.map((categoria) => ({ valor: categoria.id, texto: categoria.nombre }));

  return (
    <div className="row g-2 mb-4 justify-content-center barra-filtros">
      <div className="col-12 col-md-6">
        <CampoBusqueda
          placeholder="Buscar servicio por nombre"
          etiqueta="Buscar servicio"
          value={props.texto}
          onChange={props.onCambiarTexto}
        />
      </div>

      <div className="col-12 col-md-4">
        <label htmlFor="filtro-categoria" className="visually-hidden">Categoría</label>
        <Selector
          id="filtro-categoria"
          name="categoria"
          textoInicial="Todas las categorías"
          opciones={opciones}
          value={props.categoria}
          onChange={props.onCambiarCategoria}
        />
      </div>
    </div>
  );
}

export default BarraFiltros;
