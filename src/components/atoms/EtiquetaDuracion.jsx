function EtiquetaDuracion(props) {
  return (
    <span className="badge etiqueta-suave d-inline-block w-auto">
      {props.duracion} min
    </span>
  );
}

export default EtiquetaDuracion;