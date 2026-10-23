import { Container, Row, Col } from "react-bootstrap";
import PlantillaPrincipal from "../components/templates/PlantillaPrincipal";
import InfoContacto from "../components/organisms/InfoContacto";
import { useTituloPagina } from "../hooks/useTituloPagina";
import { clinica } from "../data/clinica";

function Contacto() {
  useTituloPagina("Contacto");

  return (
    <PlantillaPrincipal>
      <Container className="py-5">
        <h1 className="mb-4">Contacto</h1>
        <Row className="justify-content-center">
          <Col xs={12} md={8} lg={6}>
            <InfoContacto clinica={clinica} />
          </Col>
        </Row>
      </Container>
    </PlantillaPrincipal>
  );
}

export default Contacto;