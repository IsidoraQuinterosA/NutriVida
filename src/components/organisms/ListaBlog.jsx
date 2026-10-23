import { Row, Col } from "react-bootstrap";
import TarjetaBlog from "../molecules/TarjetaBlog";

function ListaBlog(props) {
  return (
    <Row>
      {props.entradas.map((entrada) => (
        <Col key={entrada.id} xs={12} md={6} lg={4} className="mb-3">
          <TarjetaBlog
            titulo={entrada.titulo}
            fecha={entrada.fecha}
            autor={entrada.autor}
            resumen={entrada.resumen}
            onLeer={() => props.onLeer(entrada.id)}
          />
        </Col>
      ))}
    </Row>
  );
}

export default ListaBlog;