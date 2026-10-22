import { Row, Col } from "react-bootstrap";
import EtiquetaEstado from "../atoms/EtiquetaEstado";
import { formatearPrecio } from "../../utils/precios";

// Estadísticas básicas que pide el caso: atenciones, inasistencia y distribución por nutricionista
function ReporteCitas(props) {
  return (
    <>
      <Row className="mb-4">
        <Col xs={12} md={6} className="mb-3">
          <div className="card h-100">
            <div className="card-body">
              <p className="display-6 fw-bold mb-0">{props.tasaInasistencia}%</p>
              <p className="mb-0">Tasa de inasistencia</p>
            </div>
          </div>
        </Col>
        <Col xs={12} md={6} className="mb-3">
          <div className="card h-100">
            <div className="card-body">
              <p className="display-6 fw-bold mb-0">{formatearPrecio(props.ingresos)}</p>
              <p className="mb-0">Ingresos por citas atendidas</p>
            </div>
          </div>
        </Col>
      </Row>

      <Row>
        <Col xs={12} lg={6} className="mb-4">
          <h2 className="h5">Citas por estado</h2>
          <table className="table table-sm">
            <tbody>
              {Object.keys(props.porEstado).map((estado) => (
                <tr key={estado}>
                  <td><EtiquetaEstado estado={estado} /></td>
                  <td className="text-end">{props.porEstado[estado]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </Col>

        <Col xs={12} lg={6} className="mb-4">
          <h2 className="h5">Citas por nutricionista</h2>
          <table className="table table-sm">
            <tbody>
              {props.porNutricionista.map((fila) => (
                <tr key={fila.id}>
                  <td>{fila.nombre}</td>
                  <td className="text-end">{fila.cantidad}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </Col>
      </Row>
    </>
  );
}

export default ReporteCitas;
