import { Container, Row, Col } from "react-bootstrap";
import TarjetaBeneficio from "../molecules/TarjetaBeneficio";

function PorQueElegirnos(props) {
  return (
    <section className="py-5">
      <Container>
        <h2 className="mb-4">{props.titulo}</h2>

        <Row>
          {props.beneficios.map((beneficio) => (
            <Col key={beneficio.titulo} xs={12} md={4} className="mb-3">
              <TarjetaBeneficio
                titulo={beneficio.titulo}
                descripcion={beneficio.descripcion}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default PorQueElegirnos;
