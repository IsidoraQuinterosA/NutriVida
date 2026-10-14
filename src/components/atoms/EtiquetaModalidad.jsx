import React from 'react';

function EtiquetaModalidad(props) {
  const esPresencial = props.modalidad?.toLowerCase() === 'presencial';

  const texto = esPresencial ? 'Presencial' : 'Online';
  const claseColor = esPresencial ? 'bg-success' : 'bg-primary';

  return (
    <span className={`badge ${claseColor}`}>
      {texto}
    </span>
  );
}

export default EtiquetaModalidad;