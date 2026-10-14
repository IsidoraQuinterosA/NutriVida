import { Container, Row, Col } from "react-bootstrap";
import TarjetaBeneficio from "../molecules/TarjetaBeneficio";

// props.beneficios es una lista de objetos { titulo, descripcion }
function PorQueElegirnos(props) {
  return (
    <section className="py-5">
      <Container>
        <h2 className="mb-4">{props.titulo}</h2>

        <Row>
          {props.beneficios.map((beneficio) => (
            // 1 columna en celular, 3 columnas desde tablet (md)
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
