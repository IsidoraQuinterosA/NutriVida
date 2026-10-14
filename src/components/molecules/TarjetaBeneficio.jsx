function TarjetaBeneficio(props) {
  return (
    <div className="card h-100">
      <div className="card-body">
        <h3 className="card-title h5">{props.titulo}</h3>
        <p className="card-text">{props.descripcion}</p>
      </div>
    </div>
  );
}

export default TarjetaBeneficio;
