import Boton from "../atoms/Boton";

function TarjetaResumen(props) {
  return (
    <div className="card h-100 text-center">
      <div className="card-body">
        <p className="display-6 fw-bold mb-0">{props.numero}</p>
        <p className="card-text">{props.titulo}</p>
        <Boton texto={props.textoBoton} variante="outline-primary" tamano="sm" onClick={props.onClick} />
      </div>
    </div>
  );
}

export default TarjetaResumen;
