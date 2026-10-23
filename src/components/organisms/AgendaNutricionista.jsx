import FilaCitaAgenda from "../molecules/FilaCitaAgenda";

function AgendaNutricionista(props) {
  if (props.citas.length === 0) {
    return <p className="text-body-secondary">{props.mensajeVacio}</p>;
  }

  return (
    <div className="table-responsive mb-4">
      <table className="table table-hover align-middle">
        <thead>
          <tr>
            <th>Fecha</th>
            <th>Hora</th>
            <th>Paciente</th>
            <th>Motivo</th>
            <th>Estado</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {props.citas.map((cita) => (
            <FilaCitaAgenda
              key={cita.id}
              fecha={cita.fecha}
              hora={cita.hora}
              pacienteNombre={cita.pacienteNombre}
              motivo={cita.motivo}
              estado={cita.estado}
              onConfirmar={() => props.onCambiarEstado(cita.id, "confirmada")}
              onCancelar={() => props.onCambiarEstado(cita.id, "cancelada")}
              onAtendida={() => props.onCambiarEstado(cita.id, "atendida")}
              onInasistencia={() => props.onCambiarEstado(cita.id, "inasistencia")}
              onVerFicha={() => props.onVerFicha(cita.pacienteCorreo)}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AgendaNutricionista;