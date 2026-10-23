import { calcularPorcentajeDescuento } from "../../utils/precios";

function EtiquetaOferta(props) {
  const porcentaje = calcularPorcentajeDescuento(props.precio, props.precioOferta);

  return <span className="badge etiqueta-oferta">Oferta -{porcentaje}%</span>;
}

export default EtiquetaOferta;
