import { useNavigate, useLocation } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import PlantillaPrincipal from "./PlantillaPrincipal";
import MenuLateral from "../organisms/MenuLateral";
import { useSesion } from "../../hooks/useSesion";
import { menus } from "../../data/menus";

function PlantillaPanel(props) {
  const navigate = useNavigate();
  const ubicacion = useLocation();
  const sesion = useSesion();
  const enlaces = sesion.usuario ? menus[sesion.usuario.rol] : [];

  return (
    <PlantillaPrincipal>
      <Container className="py-4">
        <Row>
          <Col xs={12} md={3}>
            <MenuLateral
              enlaces={enlaces}
              rutaActual={ubicacion.pathname}
              onNavegar={navigate}
            />
          </Col>

          <Col xs={12} md={9} className="text-start">
            <h1 className="h3 mb-4">{props.titulo}</h1>
            {props.children}
          </Col>
        </Row>
      </Container>
    </PlantillaPrincipal>
  );
}

export default PlantillaPanel;
