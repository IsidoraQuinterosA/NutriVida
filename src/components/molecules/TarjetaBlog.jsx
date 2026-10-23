import Boton from "../atoms/Boton";
import { formatearFecha } from "../../utils/fechas";

function TarjetaBlog(props) {
  return (
    <div className="card h-100">
      <div className="card-body d-flex flex-column">
        <h3 className="h5 card-title">{props.titulo}</h3>
        <p className="small text-body-secondary">{formatearFecha(props.fecha)} · {props.autor}</p>
        <p className="card-text">{props.resumen}</p>
        <div className="mt-auto">
          <Boton texto="Leer más" variante="outline-primary" onClick={props.onLeer} />
        </div>
      </div>
    </div>
  );
}

export default TarjetaBlog;