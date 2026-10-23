import { useNavigate, useParams } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import PlantillaPrincipal from "../components/templates/PlantillaPrincipal";
import DetalleBlog from "../components/organisms/DetalleBlog";
import Boton from "../components/atoms/Boton";
import { useTituloPagina } from "../hooks/useTituloPagina";
import { entradas } from "../data/blog";

function EntradaBlog() {
  const navigate = useNavigate();
  const params = useParams();
  const entrada = entradas.find((e) => e.id === Number(params.id));
  useTituloPagina(entrada ? entrada.titulo : "Entrada no encontrada");

  return (
    <PlantillaPrincipal>
      <Container className="py-5">
        <Row className="justify-content-center">
          <Col xs={12} lg={8}>
            {entrada ? (
              <DetalleBlog entrada={entrada} onVolver={() => navigate("/blog")} />
            ) : (
              <>
                <h1 className="h3">Entrada no encontrada</h1>
                <Boton texto="Volver al blog" onClick={() => navigate("/blog")} />
              </>
            )}
          </Col>
        </Row>
      </Container>
    </PlantillaPrincipal>
  );
}

export default EntradaBlog;