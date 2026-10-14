import { Container, Row, Col } from "react-bootstrap";
import Boton from "../atoms/Boton";

function Bienvenida(props) {
  return (
    <section className="bg-light py-5 text-center">
      <Container>
        <Row className="justify-content-center">
          <Col xs={12} lg={8}>
            <h1 className="display-5 fw-bold">{props.titulo}</h1>

            <p className="lead mb-4">{props.descripcion}</p>

            <Boton
              texto={props.textoBoton}
              variante="primary"
              onClick={props.onClickBoton}
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Bienvenida;
