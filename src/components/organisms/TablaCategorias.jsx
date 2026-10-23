import BotonesAccion from "../molecules/BotonesAccion";

function TablaCategorias(props) {
  return (
    <div className="table-responsive">
      <table className="table table-hover align-middle">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Descripción</th>
            <th>Servicios</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {props.categorias.map((categoria) => (
            <tr key={categoria.id}>
              <td>{categoria.nombre}</td>
              <td className="small">{categoria.descripcion}</td>
              <td>{props.contarServicios(categoria.id)}</td>
              <td>
                <BotonesAccion
                  onEditar={() => props.onEditar(categoria.id)}
                  onEliminar={() => props.onEliminar(categoria.id)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TablaCategorias;
