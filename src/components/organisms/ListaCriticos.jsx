import Boton from "../atoms/Boton";

// Servicios con pocos cupos disponibles
function ListaCriticos(props) {
  if (props.servicios.length === 0) {
    return <p className="text-body-secondary">No hay servicios con pocos cupos.</p>;
  }

  return (
    <div className="table-responsive">
      <table className="table align-middle">
        <thead>
          <tr>
            <th>Código</th>
            <th>Servicio</th>
            <th>Cupos</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {props.servicios.map((servicio) => (
            <tr key={servicio.codigo}>
              <td>{servicio.codigo}</td>
              <td>{servicio.nombre}</td>
              <td><span className="badge text-bg-danger">{servicio.cupos}</span></td>
              <td>
                <Boton texto="Editar cupos" variante="outline-primary" tamano="sm" onClick={() => props.onEditar(servicio.codigo)} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ListaCriticos;
