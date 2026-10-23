import Boton from "../atoms/Boton";
import { formatearPrecio } from "../../utils/precios";

function ItemSolicitud(props) {
  return (
    <li className="list-group-item d-flex flex-column flex-md-row align-items-center justify-content-between gap-2">
      <div className="text-md-start">
        <p className="fw-bold mb-0">{props.nombre}</p>
        <p className="small text-body-secondary mb-0">{formatearPrecio(props.precio)} c/u</p>
      </div>

      <div className="d-flex align-items-center gap-2">
        <Boton texto="-" variante="outline-secondary" tamano="sm" onClick={props.onRestar} disabled={props.cantidad === 1} />
        <span aria-label="cantidad">{props.cantidad}</span>
        <Boton texto="+" variante="outline-secondary" tamano="sm" onClick={props.onSumar} />
      </div>

      <p className="fw-bold mb-0">{formatearPrecio(props.precio * props.cantidad)}</p>

      <Boton texto="Quitar" variante="outline-danger" tamano="sm" onClick={props.onQuitar} />
    </li>
  );
}

export default ItemSolicitud;
