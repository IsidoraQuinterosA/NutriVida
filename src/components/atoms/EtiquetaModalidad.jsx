import React from 'react';

function EtiquetaModalidad(props) {

  const modalidad =  props.modalidad || "Presencial";
  const esPresencial = modalidad.toLowerCase().startsWith("presencial");
  const claseColor = esPresencial ? "etiqueta-suave" : "etiqueta-online";

  return <span className={"badge " + claseColor}>{modalidad}</span>;
}

export default EtiquetaModalidad;