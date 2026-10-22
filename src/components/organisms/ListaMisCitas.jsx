import { Row, Col } from "react-bootstrap";
import TarjetaCita from "../molecules/TarjetaCita";

// Citas de un paciente en una grilla: 1 columna en celular, 2 en tablet y escritorio
function ListaMisCitas(props) {
  if (props.citas.length === 0) {
    return <p className="text-body-secondary">{props.mensajeVacio}</p>;
  }

  return (
    <Row>
      {props.citas.map((cita) => (
        <Col key={cita.id} xs={12} md={6} className="mb-3">
          <TarjetaCita
            numero={cita.numero}
            fecha={cita.fecha}
            hora={cita.hora}
            estado={cita.estado}
            total={cita.total}
            nutricionistaNombre={cita.nutricionistaNombre}
            servicios={cita.servicios.map((s) => s.nombre).join(", ")}
            onCancelar={props.onCancelar ? () => props.onCancelar(cita.id) : null}
            onReprogramar={props.onReprogramar ? () => props.onReprogramar(cita.id) : null}
          />
        </Col>
      ))}
    </Row>
  );
}

export default ListaMisCitas;
