import EtiquetaEstado from "../atoms/EtiquetaEstado";
import Boton from "../atoms/Boton";
import { formatearFecha } from "../../utils/fechas";
import { formatearPrecio } from "../../utils/precios";

function TarjetaCita(props) {
  const sePuedeModificar = props.estado === "pendiente" || props.estado === "confirmada";

  return (
    <div className="card h-100 text-start">
      <div className="card-body">
        <div className="d-flex justify-content-between align-items-start mb-2">
          <h3 className="h6 mb-0">{props.numero}</h3>
          <EtiquetaEstado estado={props.estado} />
        </div>

        <p className="mb-1">{formatearFecha(props.fecha)} a las {props.hora}</p>
        <p className="mb-1 small">{props.nutricionistaNombre}</p>
        <p className="mb-1 small text-body-secondary">{props.servicios}</p>
        <p className="fw-bold mb-0">{formatearPrecio(props.total)}</p>
      </div>

      {sePuedeModificar && props.onCancelar && (
        <div className="card-footer d-flex gap-2">
          <Boton texto="Reprogramar" variante="outline-primary" tamano="sm" onClick={props.onReprogramar} />
          <Boton texto="Cancelar cita" variante="outline-danger" tamano="sm" onClick={props.onCancelar} />
        </div>
      )}
    </div>
  );
}

export default TarjetaCita;
