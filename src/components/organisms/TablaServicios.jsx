import FilaServicio from "../molecules/FilaServicio";

function TablaServicios(props) {
  // Busca el nombre de la categoría a partir de su id
  function nombreCategoria(id) {
    const categoria = props.categorias.find((c) => c.id === id);
    return categoria ? categoria.nombre : id;
  }

  return (
    <div className="table-responsive">
      <table className="table table-hover align-middle">
        <thead>
          <tr>
            <th>Código</th>
            <th>Nombre</th>
            <th>Categoría</th>
            <th>Precio</th>
            <th>Cupos</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {props.servicios.map((servicio) => (
            <FilaServicio
              key={servicio.codigo}
              codigo={servicio.codigo}
              nombre={servicio.nombre}
              categoriaNombre={nombreCategoria(servicio.categoria)}
              precio={servicio.precio}
              precioOferta={servicio.precioOferta}
              cupos={servicio.cupos}
              onVer={() => props.onVer(servicio.codigo)}
              onEditar={() => props.onEditar(servicio.codigo)}
              onEliminar={() => props.onEliminar(servicio.codigo)}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TablaServicios;
