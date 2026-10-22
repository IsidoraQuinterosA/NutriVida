import EtiquetaEstado from "../atoms/EtiquetaEstado";
import Boton from "../atoms/Boton";
import { formatearFecha } from "../../utils/fechas";
import { formatearPrecio } from "../../utils/precios";

function FilaCitaAdmin(props) {
  return (
    <tr>
      <td>{props.numero}</td>
      <td>{formatearFecha(props.fecha)} {props.hora}</td>
      <td>{props.pacienteNombre}</td>
      <td>{props.nutricionistaNombre}</td>
      <td><EtiquetaEstado estado={props.estado} /></td>
      <td>{formatearPrecio(props.total)}</td>
      <td>
        <Boton texto="Ver" variante="outline-primary" tamano="sm" onClick={props.onVer} />
      </td>
    </tr>
  );
}

export default FilaCitaAdmin;
