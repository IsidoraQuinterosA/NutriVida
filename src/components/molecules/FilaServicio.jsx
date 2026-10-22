import BotonesAccion from "./BotonesAccion";
import { formatearPrecio } from "../../utils/precios";

function FilaServicio(props) {
  return (
    <tr>
      <td>{props.codigo}</td>
      <td>{props.nombre}</td>
      <td>{props.categoriaNombre}</td>
      <td>
        {formatearPrecio(props.precio)}
        {props.precioOferta !== null && (
          <span className="d-block small text-danger">Oferta: {formatearPrecio(props.precioOferta)}</span>
        )}
      </td>
      <td>{props.cupos}</td>
      <td>
        <BotonesAccion onVer={props.onVer} onEditar={props.onEditar} onEliminar={props.onEliminar} />
      </td>
    </tr>
  );
}

export default FilaServicio;
