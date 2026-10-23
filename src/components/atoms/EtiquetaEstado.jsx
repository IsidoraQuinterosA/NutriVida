const colores = {
  pendiente: "estado-pendiente",
  confirmada: "estado-confirmada",
  atendida: "estado-atendida",
  cancelada: "estado-cancelada",
  inasistencia: "estado-inasistencia",
};

const textos = {
  pendiente: "Pendiente",
  confirmada: "Confirmada",
  atendida: "Atendida",
  cancelada: "Cancelada",
  inasistencia: "No asistió",
};

function EtiquetaEstado(props) {
  return <span className={"badge " + colores[props.estado]}>{textos[props.estado]}</span>;
}

export default EtiquetaEstado;
