function TarjetaNutricionista(props) {
  return (
    <div className="card h-100">
      <div className="card-body">
        <h3 className="h6 card-title">{props.nombre}</h3>
        <p className="card-text small">{props.especialidad}</p>
        <p className="card-text small text-body-secondary mb-0">
          {props.dias}<br />
          {props.horario}
        </p>
      </div>
    </div>
  );
}

export default TarjetaNutricionista;