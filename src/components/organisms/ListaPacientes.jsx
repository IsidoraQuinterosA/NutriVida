import Boton from "../atoms/Boton";

function ListaPacientes(props) {
  if (props.pacientes.length === 0) {
    return <p className="text-body-secondary">Todavía no tienes pacientes.</p>;
  }

  return (
    <ul className="list-group">
      {props.pacientes.map((paciente) => (
        <li key={paciente.correo} className="list-group-item d-flex flex-column flex-md-row justify-content-between align-items-md-center gap-2">
          <div>
            <p className="fw-bold mb-0">{paciente.nombre}</p>
            <p className="small text-body-secondary mb-0">{paciente.correo} · {paciente.cantidadCitas} cita(s)</p>
          </div>
          <Boton texto="Ver ficha" variante="outline-primary" tamano="sm" onClick={() => props.onVerFicha(paciente.correo)} />
        </li>
      ))}
    </ul>
  );
}

export default ListaPacientes;