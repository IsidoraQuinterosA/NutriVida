import ItemSolicitud from "../molecules/ItemSolicitud";
import Boton from "../atoms/Boton";
import { formatearPrecio } from "../../utils/precios";

// La solicitud en curso (el "carrito"): servicios elegidos, total y acciones
function ListaSolicitud(props) {
  if (props.items.length === 0) {
    return (
      <div className="py-4">
        <p>Tu solicitud está vacía.</p>
        <Boton texto="Ver servicios" onClick={props.onVerServicios} />
      </div>
    );
  }

  return (
    <>
      <ul className="list-group mb-4">
        {props.items.map((item) => (
          <ItemSolicitud
            key={item.codigo}
            nombre={item.nombre}
            precio={item.precio}
            cantidad={item.cantidad}
            onSumar={() => props.onCambiarCantidad(item.codigo, item.cantidad + 1)}
            onRestar={() => props.onCambiarCantidad(item.codigo, item.cantidad - 1)}
            onQuitar={() => props.onQuitar(item.codigo)}
          />
        ))}
      </ul>

      <p className="h4 mb-4">Total: {formatearPrecio(props.total)}</p>

      <div className="d-flex flex-column flex-md-row justify-content-center gap-2">
        <Boton texto="Limpiar solicitud" variante="outline-secondary" onClick={props.onLimpiar} />
        <Boton texto="Confirmar cita" onClick={props.onConfirmar} />
      </div>
    </>
  );
}

export default ListaSolicitud;
