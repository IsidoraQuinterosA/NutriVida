import { formatearPrecio } from "../../utils/precios";

// Tabla con los servicios de una cita (o de la solicitud en curso) y el total
function ResumenServicios(props) {
  return (
    <div className="table-responsive mb-3">
      <table className="table table-sm align-middle text-start">
        <thead>
          <tr>
            <th>Servicio</th>
            <th className="text-center">Cantidad</th>
            <th className="text-end">Subtotal</th>
          </tr>
        </thead>
        <tbody>
          {props.servicios.map((servicio) => (
            <tr key={servicio.codigo}>
              <td>{servicio.nombre}</td>
              <td className="text-center">{servicio.cantidad}</td>
              <td className="text-end">{formatearPrecio(servicio.precio * servicio.cantidad)}</td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <th colSpan={2}>Total</th>
            <th className="text-end">{formatearPrecio(props.total)}</th>
          </tr>
        </tfoot>
      </table>
    </div>
  );
}

export default ResumenServicios;
