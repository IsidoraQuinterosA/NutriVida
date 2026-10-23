import EtiquetaEstado from "../atoms/EtiquetaEstado";
import Boton from "../atoms/Boton";
import { formatearFecha } from "../../utils/fechas";

function FilaCitaAgenda(props) {
  return (
    <tr>
      <td>{formatearFecha(props.fecha)}</td>
      <td>{props.hora}</td>
      <td>{props.pacienteNombre}</td>
      <td className="small">{props.motivo}</td>
      <td><EtiquetaEstado estado={props.estado} /></td>
      <td>
        <div className="d-flex flex-wrap gap-1">
          {props.estado === "pendiente" && (
            <>
              <Boton texto="Confirmar" tamano="sm" onClick={props.onConfirmar} />
              <Boton texto="Rechazar" variante="outline-danger" tamano="sm" onClick={props.onCancelar} />
            </>
          )}
          {props.estado === "confirmada" && (
            <>
              <Boton texto="Atendida" variante="success" tamano="sm" onClick={props.onAtendida} />
              <Boton texto="No asistió" variante="outline-danger" tamano="sm" onClick={props.onInasistencia} />
            </>
          )}
          <Boton texto="Ficha" variante="outline-secondary" tamano="sm" onClick={props.onVerFicha} />
        </div>
      </td>
    </tr>
  );
}

export default FilaCitaAgenda;
