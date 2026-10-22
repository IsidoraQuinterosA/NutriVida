import { formatearPrecio } from "../../utils/precios";

// Muestra un precio con formato chileno. Si hay precio anterior (oferta), lo muestra tachado.
function Precio(props) {
  return (
    <p className="precio mb-0">
      {props.precioAnterior && (
        <span className="text-decoration-line-through text-body-secondary me-2">
          {formatearPrecio(props.precioAnterior)}
        </span>
      )}
      <span className="precio-valor">{formatearPrecio(props.valor)}</span>
    </p>
  );
}

export default Precio;