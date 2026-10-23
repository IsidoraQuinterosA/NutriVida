const colores = {
  pendiente: "text-bg-warning",
  confirmada: "text-bg-primary",
  atendida: "text-bg-success",
  cancelada: "text-bg-secondary",
  inasistencia: "text-bg-danger",
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
