import FilaCitaAdmin from "../molecules/FilaCitaAdmin";

// Tabla de citas. La usan Citas y el Historial de un usuario.
function TablaCitas(props) {
  if (props.citas.length === 0) {
    return <p className="text-body-secondary">{props.mensajeVacio}</p>;
  }

  return (
    <div className="table-responsive">
      <table className="table table-hover align-middle">
        <thead>
          <tr>
            <th>N°</th>
            <th>Fecha</th>
            <th>Paciente</th>
            <th>Nutricionista</th>
            <th>Estado</th>
            <th>Total</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {props.citas.map((cita) => (
            <FilaCitaAdmin
              key={cita.id}
              numero={cita.numero}
              fecha={cita.fecha}
              hora={cita.hora}
              pacienteNombre={cita.pacienteNombre}
              nutricionistaNombre={cita.nutricionistaNombre}
              estado={cita.estado}
              total={cita.total}
              onVer={() => props.onVer(cita.id)}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TablaCitas;
