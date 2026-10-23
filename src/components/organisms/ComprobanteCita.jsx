import EtiquetaEstado from "../atoms/EtiquetaEstado";
import Boton from "../atoms/Boton";
import ResumenServicios from "./ResumenServicios";
import { formatearFecha } from "../../utils/fechas";

function ComprobanteCita(props) {
  const cita = props.cita;

  return (
    <div className="card">
      <div className="card-body">
        <div className="d-flex justify-content-between align-items-start mb-3">
          <h2 className="h4 mb-0">Comprobante {cita.numero}</h2>
          <EtiquetaEstado estado={cita.estado} />
        </div>

        <p className="mb-1"><strong>Paciente:</strong> {cita.pacienteNombre} ({cita.pacienteCorreo})</p>
        <p className="mb-1"><strong>Nutricionista:</strong> {props.nutricionistaNombre}</p>
        <p className="mb-1"><strong>Fecha y hora:</strong> {formatearFecha(cita.fecha)} a las {cita.hora}</p>
        <p className="mb-3"><strong>Motivo:</strong> {cita.motivo}</p>

        <ResumenServicios servicios={cita.servicios} total={cita.total} />

        <div className="d-flex flex-wrap gap-2">
          <Boton texto="Volver" variante="outline-secondary" onClick={props.onVolver} />
          {cita.estado === "pendiente" && (
            <>
              <Boton texto="Confirmar cita" onClick={() => props.onCambiarEstado("confirmada")} />
              <Boton texto="Cancelar cita" variante="outline-danger" onClick={() => props.onCambiarEstado("cancelada")} />
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default ComprobanteCita;
