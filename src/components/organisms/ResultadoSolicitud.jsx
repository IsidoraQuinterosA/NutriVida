import Boton from "../atoms/Boton";
import ResumenServicios from "./ResumenServicios";
import { formatearFecha } from "../../utils/fechas";

// Resultado de confirmar la cita: éxito (con número y resumen) o error (con aviso)
function ResultadoSolicitud(props) {
  return (
    <div className="py-4">
      <div className={props.exito ? "alert alert-success" : "alert alert-danger"} role="alert">
        <h1 className="h4">{props.titulo}</h1>
        <p className="mb-0">{props.mensaje}</p>
      </div>

      {props.cita && (
        <div className="card mb-4 text-start">
          <div className="card-body">
            <p className="mb-1"><strong>Número de solicitud:</strong> {props.cita.numero}</p>
            <p className="mb-1"><strong>Nutricionista:</strong> {props.nutricionistaNombre}</p>
            <p className="mb-3"><strong>Fecha y hora:</strong> {formatearFecha(props.cita.fecha)} a las {props.cita.hora}</p>
            <ResumenServicios servicios={props.cita.servicios} total={props.cita.total} />
          </div>
        </div>
      )}

      <div className="d-flex flex-column flex-md-row justify-content-center gap-2">
        <Boton texto={props.textoSecundario} variante="outline-secondary" onClick={props.onSecundario} />
        <Boton texto={props.textoPrincipal} onClick={props.onPrincipal} />
      </div>
    </div>
  );
}

export default ResultadoSolicitud;
