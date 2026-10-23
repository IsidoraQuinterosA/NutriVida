import { Row, Col } from "react-bootstrap";
import TarjetaResumen from "../molecules/TarjetaResumen";

function ResumenDashboard(props) {
  return (
    <Row>
      {props.tarjetas.map((tarjeta) => (
        <Col key={tarjeta.titulo} xs={12} sm={6} lg={3} className="mb-3">
          <TarjetaResumen
            titulo={tarjeta.titulo}
            numero={tarjeta.numero}
            textoBoton={tarjeta.textoBoton}
            onClick={() => props.onNavegar(tarjeta.ruta)}
          />
        </Col>
      ))}
    </Row>
  );
}

export default ResumenDashboard;
