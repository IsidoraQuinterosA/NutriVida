function InfoContacto(props) {
  return (
    <div className="card">
      <ul className="list-group list-group-flush">
        <li className="list-group-item"><strong>Dirección:</strong> {props.clinica.direccion}</li>
        <li className="list-group-item"><strong>Teléfono:</strong> {props.clinica.telefono}</li>
        <li className="list-group-item"><strong>Correo:</strong> {props.clinica.correo}</li>
        <li className="list-group-item"><strong>Horario:</strong> {props.clinica.horario}</li>
      </ul>
    </div>
  );
}

export default InfoContacto;